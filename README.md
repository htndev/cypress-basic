# Cypress Basics

## [Covering target](https://hospital-theta.now.sh/)

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

### Installation

> With yarn

```sh
yarn
```

> With npm

```sh
npm i
```

### Tests

Run tests locally:

> With yarn

```sh
yarn test
```

> With npm

```sh
npm test
```

Run tests locally with Cypress GUI:

> With yarn

```sh
yarn cypress:open
```

> With npm

```sh
npm run cypress:open
```

### Docker

#### Build image

```sh
cd cypress-basic
docker build -t cypress-basic:v1 .
```

#### Run container

```sh
docker run -d cypress-test:v1
```

### Reports

To generate report use:

> With yarn

```sh
yarn cypress:reports
```

> With npm

```sh
npm run cypress:reports
```
