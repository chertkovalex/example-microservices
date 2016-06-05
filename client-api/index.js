require('isomorphic-fetch')
const qs = require('qs')

const initialConfig = {
    endpoint: '/api/'
}

class API {
    constructor(config = initialConfig) {
        this.config = config
    }
    search(params) {
        return fetch(`${this.config.endpoint}search?${qs.stringify(params)}`)
    }
}


module.exports = new API();