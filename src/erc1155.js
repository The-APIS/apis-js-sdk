import getWeb3 from "./web3/getWeb3";
import log from 'loglevel';
import axios from 'axios';
import qs from 'qs';

export default class ERC1155 {

  constructor(host) {
    this.host = host || 'https://api.theapis.io' // TODO -- set dev vs prod endpoint
  }

  getBalance() {
    // tokenAddress=0x85c95902239797b69beab4e617411fb94981a2a9&type=erc1155&id=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A/erc1155/balance?${qs.stringify(options)}`,
      method: "GET",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  getContractOwner() {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&apiKey= 58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/erc1155/contract?${qs.stringify(options)}`,
      method: "GET",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  getURI() {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/erc1155/uri?${qs.stringify(options)}`,
      method: "GET",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  setURI() {
    // tokenAddress=0xe56c0d9cc656196c92f6f6a598b703a342153830&uri=Apis erc1155 token test&privateKey=4b414498530f3e4fe8254e7584bcb8176c53d925185a1aaf6d3af88f1d129e74&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0x0c623F6164Fca9a5d146917a93497E5946CC7340/erc1155/uri?${qs.stringify(options)}`,
      method: "POST",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  mint() {
    // tokenAddress=0x85c95902239797b69beab4e617411fb94981a2a9&id=1&amount=10&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0xb08efdd94a2b705a12272ae985bc293d75ab70c9/erc1155/mint?${qs.stringify(options)}`,
      method: "POST",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  mintBatch() {
    // tokenAddress=0x73cb2a7a7d230eedaf10ed5037434e8e0892095b&ids=1,2,3&amounts=25,25,25&data=asd&privateKey=4b414498530f3e4fe8254e7584bcb8176c53d925185a1aaf6d3af88f1d129e74&toAddress=0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9&apiKey= 58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0x0c623F6164Fca9a5d146917a93497E5946CC7340/erc1155/mint/batch?${qs.stringify(options)}`,
      method: "POST",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  transfer() {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=2&amount=100&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/erc1155/transfer?${qs.stringify(options)}`,
      method: "POST",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  transferBatch() {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&ids=1,2&amounts=1,1&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/erc1155/transfer/batch?${qs.stringify(options)}`,
      method: "POST",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  burn() {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=1&privateKey=28f18d510b460e54799660463bfdf27654ab021edfd7cf73c5caaee434b913af&value=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A/erc1155/burn?${qs.stringify(options)}`,
      method: "POST",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }

  burnBatch() {
    // tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&ids=1,2&privateKey=28f18d510b460e54799660463bfdf27654ab021edfd7cf73c5caaee434b913af&values=1,1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios.request({
      url: `${this.host}/api/v1/tokens/0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A/erc1155/burn/batch?${qs.stringify(options)}`,
      method: "POST",
      headers: {
        "Accept": "*/*"
      },
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));
  }


}