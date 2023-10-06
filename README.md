## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```
## Create Configuration Files

Before running the project, you need to create three configuration files: `.env`, `.stag.env`, and `.accp.env`. Make sure to fill in the values for the following variables in each of these files:
```bash
    - `NAME`: Replace `XXXX` with your database name.
    - `USERNAME`: Replace `XXXX` with your database user.
    - `PASSWORD`: Replace `XXXX` with your database password.
    - `PORT`: Replace `XXXX` with your database port.
    - `HOST`: Replace `XXXX` with your database host.


```
Here is an example content for each file:
# .env
Remember to replace `XXXX` with the appropriate values for your application. Good luck with your project!
```plaintext
    HOST=XXXX
    NAME=XXXX
    USERNAME=XXXX
    PASSWORD=XXXX
    PORT=XXXX
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
