import getWeb3 from "./web3/getWeb3";
import log from 'loglevel';
import axios from 'axios';

export default class ERC1155 {

  getBalance() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A/erc1155/balance?tokenAddress=0x85c95902239797b69beab4e617411fb94981a2a9&type=erc1155&id=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "GET",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  getContractOwner() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/erc1155/contract?tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&apiKey= 58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "GET",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  getURI() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/erc1155/uri?tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "GET",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  setURI() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0x0c623F6164Fca9a5d146917a93497E5946CC7340/erc1155/uri?tokenAddress=0xe56c0d9cc656196c92f6f6a598b703a342153830&uri=Apis erc1155 token test&privateKey=4b414498530f3e4fe8254e7584bcb8176c53d925185a1aaf6d3af88f1d129e74&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "POST",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  mint() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0xb08efdd94a2b705a12272ae985bc293d75ab70c9/erc1155/mint?tokenAddress=0x85c95902239797b69beab4e617411fb94981a2a9&id=1&amount=10&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "POST",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  mintBatch() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/ 0x0c623F6164Fca9a5d146917a93497E5946CC7340/erc1155/mint/batch?tokenAddress=0x73cb2a7a7d230eedaf10ed5037434e8e0892095b&ids=1,2,3&amounts=25,25,25&data=asd&privateKey=4b414498530f3e4fe8254e7584bcb8176c53d925185a1aaf6d3af88f1d129e74&toAddress=0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9&apiKey= 58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "POST",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  transfer() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/erc1155/transfer?tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=2&amount=100&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "POST",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  transferBatch() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/erc1155/transfer/batch?tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&ids=1,2&amounts=1,1&data=asd&privateKey=6143bba50362ca9f80d1148a33aafd5789a5d97e8e4501837f8eadad48627e98&toAddress=0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "POST",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  burn() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A/erc1155/burn?tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&id=1&privateKey=28f18d510b460e54799660463bfdf27654ab021edfd7cf73c5caaee434b913af&value=1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "POST",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }

  burnBatch() {
    let headersList = {
      "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A/erc1155/burn/batch?tokenAddress=0x162019b50db2324eb59ee90b19ebcf84bf3c7ced&ids=1,2&privateKey=28f18d510b460e54799660463bfdf27654ab021edfd7cf73c5caaee434b913af&values=1,1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "POST",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
  }


}