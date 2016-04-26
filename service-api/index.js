'use strict'
const restify = require('restify')
const discovery = require('discovery')

const serviceName = 'service-api'

const server = restify.createServer()
server.use(restify.queryParser())

server.get('api/search', (req, res, next) => {
    
})

server.listen(discovery[serviceName].port, () => {
  console.log('%s listening at %s:%s', serviceName, discovery[serviceName].host, discovery[serviceName].port)
})
