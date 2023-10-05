## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```
## Create Configuration Files

Before running the project, you need to create three configuration files: `.env`, `.stag.env`, and `.accp.env`. Make sure to fill in the values for the following variables in each of these files:
```bash
    - `API_KEY`: Replace `XXXX` with your API key.
    - `DATABASE_NAME`: Replace `XXXX` with your database name.
    - `DATABASE_USER`: Replace `XXXX` with your database user.
    - `DATABASE_PORT`: Replace `XXXX` with your database port.
```
Here is an example content for each file:
# .env
Remember to replace `XXXX` with the appropriate values for your application. Good luck with your project!
```plaintext
    API_KEY=XXXX
    DATABASE_NAME=XXXX
    DATABASE_USER=XXXX
    DATABASE_PORT=XXXX
```
---

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
