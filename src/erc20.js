import log from 'loglevel';
import axios from 'axios';

export default class ERC20{

  getBalance(){
    let headersList = {
    "Accept": "*/*"
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens/0x0c623F6164Fca9a5d146917a93497E5946CC7340/balance?tokenAddress=0xB904c75e1B615B93bcb4f089322E0c12464900fc&type=erc20&apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "GET",
      headers: headersList,
    }
    axios.request(reqOptions).then(function (response) {
      log.log(response.data);
    })
  }

  launchToken(){
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json" 
    }
    let reqOptions = {
      url: "https://api.dev.theapis.io/api/v1/tokens?apiKey=58fc282a-498f-4695-88ac-f694fa98df9d&chain=ethereum&network=rinkeby",
      method: "POST",
      headers: headersList,
      data: "{\n  \"chain\": \"ethereum\",\n  \"network\": \"rinkeby\",\n  \"type\": \"APIS_ERC20\",\n  \"token\": {\n    \"name\": \"The APIS\",\n    \"symbol\": \"API\",\n    \"minter\": \"0x0c623F6164Fca9a5d146917a93497E5946CC7340\",\n    \"account\": \"0x0c623F6164Fca9a5d146917a93497E5946CC7340\",\n    \"initialSupply\": \"10000000000000000000000000\"\n  },\n  \"sender\": \"0x0c623F6164Fca9a5d146917a93497E5946CC7340\",\n  \"privateKey\": \"4b414498530f3e4fe8254e7584bcb8176c53d925185a1aaf6d3af88f1d129e74\"\n}",
    }
    axios.request(reqOptions).then(function (response) {
      log.log(response.data);
    })
  }
}