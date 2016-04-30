'use strict'
const restify = require('restify')
const discovery = require('discovery')
const axios = require('axios')

const serviceName = 'service-api'
const scraper = discovery['service-scraper']

const server = restify.createServer()
server.use(restify.queryParser())

server.get('api/search', (req, res, next) => {
  // params validation
	if (!req.params.query) return next(new restify.errors.BadRequestError('No "query" param'))
  axios.get('http://' + scraper.host + ':' + scraper.port + '/?query=' + req.params.query)
    .then(function (response) {
      res.send(response.data)
    })
    .catch((error) => {
      console.error(error)
      return next(new restify.errors.InternalServerError("Microservice Error"))
    })
})

server.listen(discovery[serviceName].port, () => {
  console.log('%s listening at %s:%s', serviceName, discovery[serviceName].host, discovery[serviceName].port)
})
