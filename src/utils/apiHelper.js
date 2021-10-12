import axios from 'axios'
import qs from 'qs'

const validateInputs = (host, urlKey, walletAddress, options) => {
  if(walletAddress===null || walletAddress==="" || typeof(walletAddress)!=="string")
    throw "walletAddress parameter does not have a valid value!"
  if(urlKey===null || urlKey==="" || typeof(urlKey)!=="string")
    throw "urlKey parameter does not have a valid value!"
  if(options===null || options==="" || typeof(options)!=="object")
    throw "options parameter does not have a valid value!"
  if(host!==("https://api.dev.theapis.io" || "https://api.theapis.io"))
    throw "host parameter is not valid"
}

export default {
  invokeGetter(host, urlKey, walletAddress, options = {}) {
    validateInputs(host,urlKey, walletAddress,options)
    return axios
      .request({
      url: `${host}/api/v1/tokens/${walletAddress}/${urlKey}?${qs.stringify(options)}`,
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    })
  },
  invokePost(host, urlKey, walletAddress, options = {}) {
    validateInputs(host,urlKey, walletAddress,options)
    return axios
      .request({
      url: `${host}/api/v1/tokens/${walletAddress}/${urlKey}?${qs.stringify(options)}`,
      method: 'POST',
      headers: {
        Accept: '*/*',
      },
    })
  }
}