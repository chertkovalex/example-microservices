var http = require('http')
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')
const discovery = require('discovery')

const serviceName = 'service-frontend'
 
// Serve up public folder 
var serve = serveStatic('public')
 
// Create server 
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})
 
// Listen 
server.listen(discovery[serviceName].port, () => {
  console.log('%s listening at %s:%s', serviceName, discovery[serviceName].host, discovery[serviceName].port)
})
