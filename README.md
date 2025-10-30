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
PORT=9089
DATABASE_URL=postgresql://postgres:postgresql@localhost:5432/auth_api

JWT_SIGN_KEY=08f7fb39dd153e7cae1036793002b6fbb96cb16553af2e21853e65b42bc3e91c52aa17957baf52e408f6df88e0ab46fb3fd711040cef7d902b88d442aaec10b8
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
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.test", "password":"Skijkhah99@#"}'
```

- login `http://localhost:3000/api/auth/login` - POST
```sh

curl -X POST http://localhost:3000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.test", "password":"Skijkhah99@#"}'
```

- profile `http://localhost:3000/api/auth/profile` - GET
```sh

curl -X GET http://localhost:3000/api/auth/profile \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzYxNjc0MjUwLCJleHAiOjE3NjE3NjA2NTB9.nstHLlvxLbREIjheQrd7F635JEd4ztHQG7Rl936dtts"
```

## responses

- on successful registration request, the response will be:
```json
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "user": {
            "id": 1,
            "email": "user@example.com",
            "created_at": "2025-10-21T15:30:00.000Z"
        }
    }
}

```
- login 
```json
{
    "success": true,
    "message": "Login successful",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYzNDgyNDAwMCwiZXhwIjoxNjM0OT",
        "user": {
            "id": 1,
            "email": "user@example.com"
        }
    }
}
```
- profile
```json
{
    "success": true,
    "data": {
        "user": {
            "id": 1,
            "email": "user@example.com",
            "created_at": "2025-10-21T15:30:00.000Z"
        }
    }
}
```

All error responses are in this format
```json
{ "success": false, "error": "error message" }

```

## status codes 

### Success codes
| **Status Code** | **Message / Meaning** | **Example Response Message** |
|------------------|------------------------|-------------------------------|
| **200 OK** | Request successful | `"Login successful"`, `"Profile retrieved successfully"` |
| **201 Created** | Resource successfully created | `"User registered successfully"`, `"Account created"` |
| **204 No Content** | Action successful, no body returned | Used for logout or token revocation |

---

### Error Responses

| **Status Code** | **When It Happens** | **Example Error Message** |
|------------------|----------------------|-----------------------------|
| **400 Bad Request** | Missing or invalid fields | `"Email and password are required"` |
| **401 Unauthorized** | No token / invalid or expired token | `"Invalid token"`, `"Token expired"`, `"Invalid credentials"` |
| **403 Forbidden** | User lacks permission | `"Access denied"` |
| **404 Not Found** | Resource does not exist | `"User not found"`, `"Resource not found"` |
| **409 Conflict** | Duplicate or conflicting data | `"User with this email already exists"` |
| **422 Unprocessable Entity** | Validation failed | `"Invalid email format"`, `"Password too weak"` |
| **500 Internal Server Error** | Unexpected backend error | `"Internal server error"` |
