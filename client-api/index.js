require('isomorphic-fetch')
const qs = require('qs')

const config = {
    endpoint: '/api/'
}

class API {
    constructor(config = config) {
        this.config = config
    }
    search(params) {
        return fetch(`${config.endpoint}search?${qs.stringify(params)}`)
    }
}


module.exports = new API();