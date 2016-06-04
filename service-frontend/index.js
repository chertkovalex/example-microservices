const http = require('http')
const fs = require('fs')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')
const discovery = require('discovery')
const browserify = require('browserify')

const serviceName = 'service-frontend'
 
// Build code from source
browserify('./src/index.jsx')
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(fs.createWriteStream('public/bundle.js'))

// Forword function to api
const forword = (req, res) => {
  let connector = http.request({
    host: discovery['service-api'].url,
    port: discovery['service-api'].port,
    path: req.url,
    method: req.method
  }, (resp) => {
    res.statusCode = resp.statusCode
    resp.pipe(res)
  });
  req.pipe(connector)
}

// Serve up public folder 
const serve = serveStatic('public')

// Create server 
const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api')) return forword(req, res)
  let done = finalhandler(req, res)
  serve(req, res, done)
})
 
// Listen 
server.listen(discovery[serviceName].port, () => {
  console.log('%s listening at %s:%s', serviceName, discovery[serviceName].host, discovery[serviceName].port)
})
