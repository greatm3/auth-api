# auth-api

User authentication API with JWT tokens, built with Express, TypeScript, and PostgreSQL

## requirements
- Postgresql
- Node.js
- npm

## Installation
```sh
git clone https://github.com/greatm3/auth-api

cd auth-api

npm install
``` 

- create a `.env` file
- template `.env.example`
```env
APP_PORT=9089
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=auth_api
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgresql
NODE_ENV=development

JWT_SIGN_KEY=c10b8002b6f42b1032aaeaa17957baf52e408f6793c3e91cdf6
```

### run in development mode
```sh

npm run migrate:ts # create `users` table in database

npm run dev # nodemon ts-node --files src/app.ts
```

### run with js, or in production
```sh

npm run build # transpiles typescript source files to javascript

npm run migrate:js 

npm run start

# starts a server at localhost, port = from .env config or defaults to 3000
```

## Endpoints

- register `http://localhost:3000/api/auth/register` - POST

```sh

curl -X POST http://localhost:3000/api/auth/register \
    -H "Cotent-Type: application/json" \
    -d '{"email":"test@test.test", "password":"Skijkhah99@#"}'
```

- login `http://localhost:3000/api/auth/login` - POST
```sh

curl -X POST http://localhost:3000/api/auth/login \
    -H "Cotent-Type: application/json" \
    -d '{"email":"test@test.test", "password":"Skijkhah99@#"}'
```

- profile `http://localhost:3000/api/auth/profile` - GET
```sh

curl -X GET http://localhost:3000/api/auth/profile \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzYxNjc0MjUwLCJleHAiOjE3NjE3NjA2NTB9.nstHLlvxLbREIjheQrd7F635JEd4ztHQG7Rl936dtts"
```
