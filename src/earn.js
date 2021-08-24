import getWeb3 from './web3/getWeb3'
import yDAI from './abis/yearn/yDAI.json'
import ySUSD from './abis/yearn/ySUSD.json'
import yTUSD from './abis/yearn/yTUSD.json'
import yUSDC from './abis/yearn/yUSDC.json'
import yUSDT from './abis/yearn/yUSDT.json'
import cTokenAbi from './abis/cTokenAbi.json'
import Data from './addresses.json'
import log from 'loglevel'

export default class Earn {
  async init() {
    // Get network provider and web3 instance.
    this.web3 = await getWeb3()
    log.log('Received web3: ')
    log.log(this.web3)

    // Use web3 to get the user's accounts.
    this.accounts = await this.web3.eth.getAccounts()

    // Get the contract instance.
    this.networkId = await this.web3.eth.net.getId()

    // Get the chain ID
    this.chainId = await this.web3.eth.getChainId()
    log.log('chain id is ' + this.chainId)

    // Fetch data from json file (cERC20,cETH,comptroller) as per the newtwork id
    this.network = Data.Addresses.find((network) => {
      return network.id === this.networkId && network.chainId === this.chainId
    })
    log.log('fetching network successful: ')
    log.log(this.network)
    this.yERC20 = this.network.yERC20
    this.yERC20.forEach((object) => {
      // object.instance = new this.web3.eth.Contract(yDAI, object.address)
      switch (object.name) {
        case 'yDAI':
          object.instance = new this.web3.eth.Contract(yDAI, object.address)
          break
        case 'ySUSD':
          object.instance = new this.web3.eth.Contract(ySUSD, object.address)
          break
        case 'yTUSD':
          object.instance = new this.web3.eth.Contract(yTUSD, object.address)
          break
        case 'yUSDC':
          object.instance = new this.web3.eth.Contract(yUSDC, object.address)
          break
        case 'yUSDT':
          object.instance = new this.web3.eth.Contract(yUSDT, object.address)
          break
      }
    })
    log.log('Instanciated')
    log.log(this.yERC20)
    this.ERC20 = this.network.ERC20
    this.ERC20 = this.ERC20.map((object) => ({
      ...object,
      instance: new this.web3.eth.Contract(cTokenAbi, object.address),
    }))
    this.yTokenAddresses = this.yERC20.map((object) => {
      return object.address
    })
  }

  // amount of ERC20
  async invest(tokenName, amount) {
    let ytoken = this.yERC20.find((yERC20) => {
      return yERC20.name === tokenName
    })
    let token = this.ERC20.find((ERC20) => {
      return ERC20.name === tokenName.substr(1)
    })
    await token.instance.methods.approve(ytoken.address, amount).send({ from: this.accounts[0] })
    return ytoken.instance.methods.deposit(amount).send({ from: this.accounts[0] })
  }

  // amount of yToken balance
  async withdraw(tokenName, amount) {
    let ytoken = this.yERC20.find((yERC20) => {
      return yERC20.name === tokenName
    })
    return ytoken.instance.methods.withdraw(amount).send({ from: this.accounts[0] })
  }

  async getTokenBalance(tokenName) {
    let ytoken = this.yERC20.find((yERC20) => {
      return yERC20.name === tokenName
    })
    let price = await ytoken.instance.methods.getPricePerFullShare().call()
    let balanceShares = await ytoken.instance.methods.balanceOf(this.accounts[0]).call()
    return balanceShares * price
  }

  getYTokenBalance(tokenName) {
    let token = this.yERC20.find((yERC20) => {
      return yERC20.name === tokenName
    })
    return token.instance.methods.balanceOf(this.accounts[0]).call()
  }
}
