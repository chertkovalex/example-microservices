# service-scraper

## Task

Create a server with one GET endpoint at ```/``` that receives one url parameter ```query```, 
the return response should be the results of the search query on google play.

### Requirements

1. Don't waste time use [google-play-scraper](https://www.npmjs.com/package/google-play-scraper).
2. Cache result (in memory is ok).
3. return 404 when no query parameter or value.

### Extra

- Persistency of the cached results.
- [Tape](https://github.com/substack/tape) tests.
