import apiConstants from "./apiConstants"

const validateGetterInputs = (walletAddress, options) => {
    //add validations here
}

export default {
    invokeGetter(urlKey, walletAddress, options = {}) {
        return axios
            .request({
            url: `${this.host}/api/v1/tokens/${walletAddress}/${apiConstants[urlKey]}?${qs.stringify(options)}`,
            method: 'GET',
            headers: {
                Accept: '*/*',
            },
        })
    }
}