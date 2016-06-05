# client-api

## Task

Create a client API package, the can run on both browser and node

### Requirements

1. The client should run on both browser and node - [AJAX/HTTP Library Comparison](http://andrewhfarmer.com/ajax-libraries/).
2. export function ```search``` for searching the API
```
  // params example - { query: 'str-to-search' }
  search(params) {
    // return promise
  }
```
3. export object ```config``` for configuring the API endpoint when not running on browser 
```
config = {
  endpoint: '/api/' // default value
}
```