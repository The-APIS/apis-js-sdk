import axios from 'axios'
import qs from 'qs'

export default class ERC721 {
  constructor(host) {
    this.host = host || 'https://api.theapis.io'
  }

  getBalance(options = {}) {
    //tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&type=erc721&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0x6A3Cd6a4f7288a43921Ff88796cb75D9e36A8b9A/balance?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  getTokenId(options = {}) {
    //tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0x389412Bf008091d108C15E3E691F9b7c5D51EB1f/id?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  getTokenOwner(options = {}) {
    // tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&id=2&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/owner?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  getTokenName(options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/name?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  getTokenSymbol(options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/symbol?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  getTotalSupply(options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/supply?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  getContractOwner(options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/contract?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  getTokenURI(options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&id=5&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/uri?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  getIdApproved(options = {}) {
    // tokenAddress=0xde30ffcf679896f119dec2c0aa330638e1d97526&id=5&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0xb08efdD94a2b705a12272Ae985Bc293d75aB70c9/approved?${qs.stringify(options)}`,
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  mint(options = {}) {
    //tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&toAddress=0xA0C0Fc0a9F63e06c798591633587003ad75DdA2f&privateKey=475769e52afb2f8d56fe0e3cee75ea20379dfb7910e3aa56ce00ec409f6ecca7&id=2&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0x408bd85004D9f70e333c46745e93b7D175762b0d/mint?${qs.stringify(options)}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  transfer(options = {}) {
    // tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&toAddress=0x389412Bf008091d108C15E3E691F9b7c5D51EB1f&tokenId=2&privateKey=ccdd1bdd60b5d349ba40ea949274203225837ab06b7a8991a5aa3ba2e2c60c81&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0xA0C0Fc0a9F63e06c798591633587003ad75DdA2f/transfer?${qs.stringify(options)}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  burn(options = {}) {
    // tokenAddress=0xb7dbaed4f382cbd400861469e5530118c4aa26e1&id=2&privateKey=8aba5e24bedd6e12651a2b11077449ef2012d21fae597a29ac3e4265b88c7bcd&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return axios
      .request({
        url: `${this.host}/api/v1/tokens/0x389412Bf008091d108C15E3E691F9b7c5D51EB1f/burn?${qs.stringify(options)}`,
        method: 'POST',
        headers: {
          Accept: '*/*',
        },
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }
}
