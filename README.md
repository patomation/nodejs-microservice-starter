# NodeJS MicroService Starter

Micro service starter using fastify

![flavorite](https://raw.githubusercontent.com/patomation/vanilla-starter/master/public/favicon.ico)

## Install

```
npm install
```

## Test

```
npm run test
```

Tip: Run verbose tests to see console.logs

```
npm run test -- --verbose
```

supports naming convention: moduleName.test.ts
Check out [ava](https://github.com/avajs/ava)

# Docker Usage

1. Build

```s
docker build --tag "node-micro" .
```

Run in produciton

```s
docker run -itd --rm node-micro
```

2. Run image as development container

```s
docker run -it --rm -p 3000:80 --volume /full/path/to/nodejs-microservice-starter/src:/app/src node-micro npm start
```

or

```s
docker compose up api
```

3. Run image as test container

```s
docker run -it --rm --volume /full/path/to/nodejs-microservice-starter/src:/app/src node-micro npm test
```

or

```s
docker compose up test
```
