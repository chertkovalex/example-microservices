# Discovery

This is a naive implementation of [service discovery](https://en.wikipedia.org/wiki/Service_discovery), 
it is hard coded and has no actual discovering functionality.

The purpose of this mode is educational, all configurations in micro services environments
should be consume though external service.

## Usage

Read the code it short and simple.

```
const discovery = require('discovery')
const serviceName = 'service-api'
discovery[serviceName].host // service host
discovery[serviceName].port // service port
```