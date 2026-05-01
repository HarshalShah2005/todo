# API Testing Guide

Quick reference for testing the Todo API using curl or Postman.

## Base URL
```
http://localhost:5000
```

## Authentication Endpoints

### 1. Sign Up
Creates a new user account.

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Login
Login with email and password.

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Get Current User
Get information about the logged-in user.

```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

## Todo Endpoints

**Note:** All todo endpoints require Authorization header with JWT token.

### 1. Get All Todos
Retrieve all todos for the current user.

```bash
curl -X GET http://localhost:5000/api/todos \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "title": "Buy groceries",
    "description": "Buy milk, eggs, bread",
    "completed": false,
    "userId": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439013",
    "title": "Complete project",
    "description": "Finish MERN todo app",
    "completed": true,
    "userId": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-14T10:30:00.000Z",
    "updatedAt": "2024-01-14T10:30:00.000Z"
  }
]
```

### 2. Create Todo
Create a new todo.

```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "Learn React",
    "description": "Complete React tutorial course"
  }'
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439014",
  "title": "Learn React",
  "description": "Complete React tutorial course",
  "completed": false,
  "userId": "507f1f77bcf86cd799439011",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

### 3. Get Single Todo
Retrieve a specific todo by ID.

```bash
curl -X GET http://localhost:5000/api/todos/507f1f77bcf86cd799439014 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### 4. Update Todo
Update a todo (title, description, or completed status).

```bash
curl -X PUT http://localhost:5000/api/todos/507f1f77bcf86cd799439014 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "Learn React Hooks",
    "description": "Master React Hooks",
    "completed": true
  }'
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439014",
  "title": "Learn React Hooks",
  "description": "Master React Hooks",
  "completed": true,
  "userId": "507f1f77bcf86cd799439011",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:35:00.000Z"
}
```

### 5. Delete Todo
Delete a todo.

```bash
curl -X DELETE http://localhost:5000/api/todos/507f1f77bcf86cd799439014 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Response:**
```json
{
  "message": "Todo deleted successfully"
}
```

### 6. Search Todos
Search todos by title or description.

```bash
curl -X GET http://localhost:5000/api/todos/search/groceries \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "title": "Buy groceries",
    "description": "Buy milk, eggs, bread",
    "completed": false,
    "userId": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

## Error Responses

### Invalid Credentials
```json
{
  "message": "Invalid email or password"
}
```

### Unauthorized (Missing Token)
```json
{
  "message": "No token, authorization denied"
}
```

### Invalid Token
```json
{
  "message": "Token is not valid"
}
```

### Not Found
```json
{
  "message": "Todo not found"
}
```

## Using Postman

1. Open Postman
2. Create a new request
3. Set method and URL (e.g., POST http://localhost:5000/api/auth/login)
4. Add headers: `Content-Type: application/json`
5. For authenticated requests, add header: `Authorization: Bearer YOUR_TOKEN`
6. Add request body (JSON)
7. Click "Send"

## Testing Workflow

1. **Sign Up**
   ```bash
   POST /api/auth/signup
   ```
   - Save the returned token

2. **Get Current User**
   ```bash
   GET /api/auth/me
   ```
   - Use the token from signup

3. **Create Todo**
   ```bash
   POST /api/todos
   ```
   - Add sample todos

4. **Get All Todos**
   ```bash
   GET /api/todos
   ```
   - Verify todos were created

5. **Update Todo**
   ```bash
   PUT /api/todos/{id}
   ```
   - Update completion status

6. **Search Todos**
   ```bash
   GET /api/todos/search/{query}
   ```
   - Search for specific todos

7. **Delete Todo**
   ```bash
   DELETE /api/todos/{id}
   ```
   - Remove a todo

---

For more information, see the detailed README files in the readme folder.
