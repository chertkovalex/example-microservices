# example-microservices

This repo is part hands-on meetup at 
[Fullstack Developers Israel](http://www.meetup.com/full-stack-developer-il/), you should also 
check the [presentation](https://docs.google.com/presentation/d/1yHtc_xDuiyHhFB5kyec-eNhaaZA72788VDwdMPwjMd8)

## Branches

1. `master` - your starting point for implementation, include implemented discovery and frontend-service.
2. `dev` - our naive solution.
3. `wireframe` - basic wireframe of the packages.
4. `frontend` - dedicate to frontend development.

## Getting started

1. Install all package dependencies:
```
cd client-api
npm i
cd ..
cd service-scraper
npm i
cd ..
cd service-api
npm i
cd ..
cd service-frontend
npm i
cd ..
``` 
2. Run 
```
npm start
```
3. Open [http://localhost:9000/](http://localhost:9000/) to view the [pm2-web](https://www.npmjs.com/package/pm2-web) client.
4. Open [http://localhost:8080/](http://localhost:8080/) for viewing the frontend.

## Caveat

Due to a [bug](https://github.com/npm/npm/issues/7426) in npm you need to manually delete
local packages and then install again.

A proper way would be to keep every package in its own repo. 