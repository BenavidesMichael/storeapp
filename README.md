## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```
## Create Configuration Files

Before running the project, you need to create three configuration files: `.env`, `.stag.env`, and `.prod.env`. Make sure to fill in the values for the following variables in each of these files:
```bash
    - `DATABASE_NAME`: `XXXX`
    - `DATABASE_USER`: `XXXX`
    - `DATABASE_PASSWORD`: `XXXX`
    - `DATABASE_PORT`: 1234
    - `DATABASE_HOST`: `XXXX`
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
