import comptrollerAbi from "./abis/comptrollerAbi.json";
import cETHAbi from "./abis/cETHAbi.json";
import cTokenAbi from "./abis/cTokenAbi.json";
import getWeb3 from "./web3/getWeb3";
import Data from "./data.json";
import log from 'loglevel';

export default class SDK {

  async init(apiKey) {
    if(!apiKey)
    return console.error('Visit https://app.theapis.io to create a [free] account and API token.');
    // Get network provider and web3 instance.
    this.web3 = await getWeb3();

    // Use web3 to get the user's accounts.
    this.accounts = await this.web3.eth.getAccounts();

    // Get the contract instance.
    this.networkId = await this.web3.eth.net.getId();

    // Get the chain ID

    this.chainId = await this.web3.eth.getChainId();

    log.log("chain id is " + this.chainId);

    // Fetch data from json file (cERC20,cETH,comptroller) as per the newtwork id
    this.network = Data.Addresses.find((network => {
      return (network.id === this.networkId && network.chainId === this.chainId);
    }));
    log.log(this.network);
    this.cERC20 = this.network.cERC20;
    this.cERC20.forEach(object => {
      object.instance = new this.web3.eth.Contract(cTokenAbi, object.address);
    });
    this.ERC20 = this.network.ERC20;
    this.ERC20 = this.ERC20.map(object => ({
      ...object,
      instance: new this.web3.eth.Contract(cTokenAbi, object.address),
    }));

    this.cTokenAddresses = this.cERC20.map(object => {
      return object.address;
    });
    
    this.cETH = this.network.cETH;
    this.cETH.instance = new this.web3.eth.Contract(cETHAbi, this.cETH.address);
    this.comptroller = this.network.comptroller;
    this.comptroller.instance = new this.web3.eth.Contract(comptrollerAbi, this.comptroller.address);
    this.markets = await this.comptroller.instance.methods.getAssetsIn(this.accounts[0]).call();
    if (this.markets.length < 8) {
      this.enterMarket();
      log.warn("market not fully loaded");
    }
    return this.markets;

  }

  getSupportedTokens() {
    return this.cERC20;
  }
  
  async enterMarket() {
    const errorCode = await this.comptroller.instance.methods.enterMarkets(this.cTokenAddresses).send({ from: this.accounts[0] });
    log.log("error code is: ");
    log.log(errorCode);
    const markets = await this.comptroller.instance.methods.getAssetsIn(this.accounts[0]).call();
    log.log("market is ");
    log.log(markets);
  };

  mintCEth(amount) {

    return this.cETH.instance.methods.mint().send({ from: this.accounts[0], value: amount });
  };

   mintCToken(cToken, amount) {
    //approve before minting
    return cToken.instance.methods.mint(amount).send({ from: this.accounts[0] });
  };

  redeemCEth(amount) {
    return this.cETH.instance.methods.redeemUnderlying(amount).send({ from: this.accounts[0] });
  };

  redeemCToken(cToken, amount) {
    return cToken.instance.methods.redeemUnderlying(amount).send({ from: this.accounts[0] });
  };

  async balanceOfCEth() {
    log.log(this.cETH.instance.methods);
    const balance = await this.cETH.instance.methods.balanceOfUnderlying(this.accounts[0]).call();
    log.log("balance of cEth");
    log.log(balance / 1e18);
  }

  async balanceOfCToken(cToken) {
    const balance = await cToken.instance.methods.balanceOfUnderlying(this.accounts[0]).call();
    log.log("balance of token");
    log.log(balance / 1e18);
  }

  invest(tokenName, amount) {
    if (tokenName === "ETH") {
      log.log("Amount for minting is " + amount);
      return this.mintCEth(amount);
    }
    else{
      let token = this.cERC20.find((cERC20 => {
        return (cERC20.name === tokenName);
      }));
      return this.mintCToken(token,amount);
    }
  }

   withdraw(tokenName, amount) {
    if (tokenName === "ETH") {
      log.log("Amount for redeeming is " + amount);
      return this.redeemCEth(amount);
    }
    else{
      let token = this.cERC20.find((cERC20 => {
        return (cERC20.name === tokenName);
      }));
      return this.redeemCToken(token,amount);
    }
  }

  async getInvestBalance(tokenName) {
    return tokenName === 'ETH' ? (await this.cETH.instance.methods.balanceOfUnderlying(this.accounts[0]).call()) : (
      this.cERC20.find(ERC20 => ERC20.name === tokenName)
        .instance.methods.balanceOfUnderlying(this.accounts[0]).call()
    )
  }

  async getBalance(tokenName) {
    return tokenName === 'ETH' ? this.web3.eth.getBalance(this.accounts[0]) : (
      this.ERC20.find(ERC20 => ERC20.name === tokenName)
        .instance.methods.balanceOf(this.accounts[0]).call()
    )
  }


  async getDecimals(tokenName) {
    return tokenName === 'ETH' ? 18 : (
      this.ERC20.find(ERC20 => ERC20.name === tokenName)
        .instance.methods.decimals().call()
    )
  }

  async getAPY(tokenName) {
    const ethMantissa = 1e18;
    const blocksPerDay = 6570; // 13.15 seconds per block
    const daysPerYear = 365;  
    var rate = await (tokenName === 'ETH' ? this.cETH.instance.methods.supplyRatePerBlock().call() : 
      this.cERC20.find(ERC20 => ERC20.name === tokenName)
        .instance.methods.supplyRatePerBlock().call());
    return (((Math.pow((rate / ethMantissa * blocksPerDay) + 1, daysPerYear))) - 1) * 100;
  }

}
