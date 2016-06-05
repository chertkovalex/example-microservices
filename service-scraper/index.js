'use strict'
const restify = require('restify')
const gplay = require('google-play-scraper')
const discovery = require('discovery')

const serviceName = 'service-scraper'

const server = restify.createServer()
server.use(restify.queryParser())

const scraps = new Map()

server.get('/', (req, res, next) => {
	// params validation
	if (!req.params.query) return next(new restify.errors.BadRequestError('No "query" param'))
	// serving from memory cache
	if (scraps.has(req.params.query)) return res.json(scraps.get(req.params.query))
	// scraping
	gplay.search({
		term: req.params.query
	}).then((raw) => {
		let results = raw.map((item) => { 
			return {
				iconUrl: item.icon,
				title: item.title,
				description: item.developer,
				footer: `Score - ${item.score}, ${item.free ? 'Free' : `${item.price}$`}`
			}
		})
		scraps.set(req.params.query, results)
		if (!res.finished) res.json(results)
	});
})

server.listen(discovery[serviceName].port, () => {
  console.log('%s listening at %s:%s', serviceName, discovery[serviceName].host, discovery[serviceName].port)
})
