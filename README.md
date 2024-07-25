## Description
 
A fork of the original [nestjs-realworld-example-app](https://github.com/lujakob/nestjs-realworld-example-app)
with all the packages updated to the latest versions and the breaking changes fixed.


## Installation

```bash
$ pnpm install
```

Set a secret key for signing JWTs in this file:
```bash
cp src/config.ts.example src/config.ts
```

Create a MySQL database with the name `nestjsrealworld`,
or use the provided Docker compose file:
```bash
sudo docker-compose up
```

Update the database config inside `src/app.module.ts`:
```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "root",
  "database": "nestjsrealworld",
  "autoLoadEntities": true,
  "synchronize": true
}
```


## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```


## API Specification

This application adheres to the api specifications set by the [Thinkster](https://github.com/gothinkster) team. This helps mix and match any backend with any other frontend without conflicts.

> [Full API Spec](https://github.com/gothinkster/realworld/tree/master/api)

More information regarding the project can be found here https://github.com/gothinkster/realworld


## Authentication
 
This applications uses JSON Web Token (JWT) to handle authentication. The token is passed with each request using the `Authorization` header with `Token` scheme. The JWT authentication middleware handles the validation and authentication of the token. Please check the following sources to learn more about JWT.

 
## Swagger API docs

This example repo uses the NestJS swagger module for API documentation. [NestJS Swagger](https://github.com/nestjs/swagger) - [www.swagger.io](https://swagger.io/)        
