import axios from 'axios'
import qs from 'qs'
import apiConstants from './utils/apiConstants'
import apiHelper from './utils/apiHelper'

export default class ERC721 {
  constructor(host) {
    if(host!== ("DEVELOPMENT" || "PRODUCTION"))
      throw 'Error: Not a valid host input in constructor of ERC721'
    this.host = apiConstants.HOST[host]
    console.log(this.host)
  }

  getBalance(walletAddress, options = {}) {
    //tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&type=erc721&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.BALANCE_URL,walletAddress,options)
  }

  getTokenId(walletAddress, options = {}) {
    //tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.TOKEN_ID_URL,walletAddress,options)
  }

  getTokenOwner(walletAddress, options = {}) {
    // tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&id=2&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.TOKEN_OWNER_URL,walletAddress,options)
  }

  getTokenName(walletAddress, options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.TOKEN_NAME_URL,walletAddress,options)
  }

  getTokenSymbol(walletAddress,  options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.TOKEN_SYMBOL_URL,walletAddress,options)
  }

  getTotalSupply(walletAddress, options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.TOTAL_SUPPLY_URL,walletAddress,options)
  }

  getContractOwner(walletAddress, options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.CONTRACT_OWNER_URL,walletAddress,options)
  }

  getTokenURI(walletAddress,  options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&id=5&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.TOKEN_URI,walletAddress,options)
  }

  getIdApproved(walletAddress, options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&id=5&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.ID_APPROVED_URL,walletAddress,options)
  }

  getCollection(walletAddress, options = {}){
    //https://api.dev.theapis.io/api/v1/tokens/0xc8bA9a0e6431a08D3032d8d77C2227cD884605eE/collection?tokenAddress=0xbb29a07c3f932188cc074500e41bcc39f9ac6bf4&apiKey=81546f88-431d-4f33-9045-f28c8df7c735&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.GET_COLLECTION_URL,walletAddress,options)
  }
  
  mint(walletAddress, options = {}) {
    //tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&toAddress=0xA0C0Fc0a9F63e06c798591633587003ad75DdA2f&privateKey=475769e52afb2f8d56fe0e3cee75ea20379dfb7910e3aa56ce00ec409f6ecca7&id=2&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokePost(this.host, apiConstants.KEYS.ERC721.MINT_URL,walletAddress,options)
  }

  transfer(walletAddress, options = {}) {
    // tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&toAddress=0x389412Bf008091d108C15E3E691F9b7c5D51EB1f&tokenId=2&privateKey=ccdd1bdd60b5d349ba40ea949274203225837ab06b7a8991a5aa3ba2e2c60c81&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokePost(this.host, apiConstants.KEYS.ERC721.TRANSFER_URL,walletAddress,options)
  }

  burn(walletAddress, options = {}) {
    // tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&id=2&privateKey=8aba5e24bedd6e12651a2b11077449ef2012d21fae597a29ac3e4265b88c7bcd&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return apiHelper.invokePost(this.host, apiConstants.KEYS.ERC721.BURN_URL,walletAddress,options)
  }

  supportsInterface(walletAddress, options = {}) {
    // erc721  interface ID :   0x80ac58cd
    // {{hostname}}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/interface?tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&interfaceId=0xc87b56dd&apiKey=81546f88-431d-4f33-9045-f28c8df7c735&chain=ethereum&network=rinkeby
    // Options = tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&interfaceId=0xc87b56dd&apiKey=81546f88-431d-4f33-9045-f28c8df7c735&chain=ethereum&network=rinkeby
    return apiHelper.invokeGetter(this.host, apiConstants.KEYS.ERC721.SUPPORTS_INTERFACE_URL,walletAddress,options)
  }
}
