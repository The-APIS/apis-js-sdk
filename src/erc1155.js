import getWeb3 from './web3/getWeb3'
import log from 'loglevel'
import axios from 'axios'
import qs from 'qs'

export default class ERC1155 {
  constructor(host) {
    this.host = host || 'https://api.theapis.io'
  }

  getBalance(walletAddress, options = {}) {
    // tokenAddress=0x85c95902239797b69beab4e617411fb94981a2a9&type=erc1155&id=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/balance?${qs.stringify(
          options,
        )}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
  }

  getContractOwner(walletAddress, options = {}) {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&apiKey= 58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/contract?${qs.stringify(
          options,
        )}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
  }

  getURI(walletAddress, options = {}) {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/uri?${qs.stringify(
          options,
        )}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
  }

  setURI(walletAddress, options = {}) {
    // tokenAddress=0xe56c0d9cc656196c92f6f6a598b703a342153830&uri=Apis erc1155 token test&privateKey=4b414498530f3e4fe8254e7584bcb8176c53d925185a1aaf6d3af88f1d129e74&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/uri?${qs.stringify(
          options,
        )}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
  }

  mint(walletAddress, options = {}) {
    // tokenAddress=0x85c95902239797b69beab4e617411fb94981a2a9&id=1&amount=10&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/mint?${qs.stringify(
          options,
        )}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
  }

  mintBatch(walletAddress, options = {}) {
    // tokenAddress=0x73cb2a7a7d230eedaf10ed5037434e8e0892095b&ids=1,2,3&amounts=25,25,25&data=asd&privateKey=4b414498530f3e4fe8254e7584bcb8176c53d925185a1aaf6d3af88f1d129e74&toAddress=0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9&apiKey= 58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/mint/batch?${qs.stringify(
          options,
        )}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
  }

  transfer(walletAddress, options = {}) {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=2&amount=100&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/transfer?${qs.stringify(
          options,
        )}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
  }

  transferBatch(walletAddress, options = {}) {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&ids=1,2&amounts=1,1&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${
          this.host
        }/api/v1/tokens/${walletAddress}/erc1155/transfer/batch?${qs.stringify(options)}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
  }

  burn(walletAddress, options = {}) {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=1&privateKey=28f18d510b460e54799660463bfdf27654ab021edfd7cf73c5caaee434b913af&value=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/burn?${qs.stringify(
          options,
        )}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
  }

  burnBatch(walletAddress, options = {}) {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&ids=1,2&privateKey=28f18d510b460e54799660463bfdf27654ab021edfd7cf73c5caaee434b913af&values=1,1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/burn/batch?${qs.stringify(
          options,
        )}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
  }

  supportsInterface(walletAddress,options = {}) {
    // erc721  interface ID :   0x80ac58cd
    // {{hostname}}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/interface?tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&interfaceId=0xc87b56dd&apiKey=81546f88-431d-4f33-9045-f28c8df7c735&chain=ethereum&network=rinkeby
    // Options = tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&interfaceId=0xc87b56dd&apiKey=81546f88-431d-4f33-9045-f28c8df7c735&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/${walletAddress}/erc1155/interface?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
  }
}
