const http = require('http')
const fs = require('fs')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')
const discovery = require('discovery')
const browserify = require('browserify')

const serviceName = 'service-frontend'
 
// Serve up public folder 
const serve = serveStatic('public')

browserify('./src/index.jsx')
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(fs.createWriteStream('public/bundle.js'))
 
// Create server 
const server = http.createServer((req, res) => {
  let done = finalhandler(req, res)
  serve(req, res, done)
})
 
// Listen 
server.listen(discovery[serviceName].port, () => {
  console.log('%s listening at %s:%s', serviceName, discovery[serviceName].host, discovery[serviceName].port)
})
