import log from 'loglevel';
import axios from 'axios';
import qs from 'qs';

export default class ERC20 {
  constructor(host) {
    this.host = host || 'https://api.theapis.io' // TODO -- set dev vs prod endpoint
  }
  async getBalance(options = {}) {
    try {
      return axios.request({
        url: `${this.host}/api/v1/tokens/0x0c623F6164Fca9a5d146917a93497E5946CC7340/balance?${qs.stringify(options)}`,
        method: "GET",
        headers: {
          "Accept": "*/*"
        },
      }).then(function (response) {
        console.log(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  launchToken(options = {}) {
    //apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby
    return  axios.request({
      url: `${this.host}/api/v1/tokens?${qs.stringify(options)}`,
      method: "POST",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json"
      },
      data: "{\n  \"chain\": \"ethereum\",\n  \"network\": \"rinkeby\",\n  \"type\": \"APIS_ERC20\",\n  \"token\": {\n    \"name\": \"The APIS\",\n    \"symbol\": \"API\",\n    \"minter\": \"0x0c623F6164Fca9a5d146917a93497E5946CC7340\",\n    \"account\": \"0x0c623F6164Fca9a5d146917a93497E5946CC7340\",\n    \"initialSupply\": \"10000000000000000000000000\"\n  },\n  \"sender\": \"0x0c623F6164Fca9a5d146917a93497E5946CC7340\",\n  \"privateKey\": \"4b414498530f3e4fe8254e7584bcb8176c53d925185a1aaf6d3af88f1d129e74\"\n}",
    }).then(function (response) {
      console.log(response.data);
    }).catch((err) => console.log(err));

  }
}