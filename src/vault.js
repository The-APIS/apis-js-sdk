import yVaultAbi from './abis/yearn/yVaultAbi.json'
import erc20Abi from './abis/erc20Abi.json'
import getWeb3 from './web3/getWeb3'
import Data from './addresses.json'
import log from 'loglevel'

export default class Vault {

  
  async init() {
    // Get network provider and web3 instance.
    this.web3 = await getWeb3()

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
    log.log(this.network)

    this.yVaults = this.network.yVaults
    this.yVaults.forEach((object) => {
      object.instance = new this.web3.eth.Contract(yVaultAbi, object.address)
    })
    log.log('yVaults initialised')
    log.log(this.yVaults)
    this.ERC20 = this.network.ERC20
    this.ERC20 = this.ERC20.map((object) => ({
      ...object,
      instance: new this.web3.eth.Contract(erc20Abi, object.address),
    }))
  }

  getSupportedVaults() {
    return this.yVaults
  }

  async getInvestBalance(tokenName) {
    return this.yVaults
      .find((object) => object.name === tokenName)
      .instance.methods.balanceOf(this.accounts[0])
      .call()
  }

  async getTokenBalance(tokenName) {
    let yVault = this.yVaults.find((yVault) => {
      return yVault.name === tokenName
    })
    let price = await yVault.instance.methods.pricePerShare().call()
    let balanceShares = await yVault.instance.methods.balanceOf(this.accounts[0]).call()
    return balanceShares * price
  }

  async getPricePerShare(tokenName){
    let yVault = this.yVaults.find((yVault) => {
      return yVault.name === tokenName
    })
    let price = await yVault.instance.methods.pricePerShare().call()
    return price
  }

  // amount of ERC20
  async invest(tokenName, amount) {
    log.log("entered invest")
    let yVault = this.yVaults.find((yVault) => {
      return yVault.name === tokenName
    })
    log.log(yVault)
    let token = this.ERC20.find((ERC20) => {
      // remove 'yv' from token name to get erc20 token name
      return ERC20.name === tokenName.substr(2)
    })
    log.log(token)
    await token.instance.methods.approve(yVault.address, amount).send({ from: this.accounts[0] })
    return yVault.instance.methods.deposit(amount).send({ from: this.accounts[0] })
  }

  // amount of yVault shares
  async withdraw(tokenName, amount) {
    let yVault = this.yVaults.find((yVault) => {
      return yVault.name === tokenName
    })
    return yVault.instance.methods.withdraw(amount).send({ from: this.accounts[0] })
  }
}
