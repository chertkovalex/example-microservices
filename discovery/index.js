'use strict'
const dev = {
    'service-api' : {
        host: 'localhost',
        port: '3000'
    },
    'service-scraper' : {
        host: 'localhost',
        port: '3001'
    },
    'service-frontend' : {
        host: 'localhost',
        port: '8080'
    }
}

module.exports = (() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') return dev
    // if (process.env.NODE_ENV === 'production') return prod
    throw Error('Unsupported runtime envio')
})()