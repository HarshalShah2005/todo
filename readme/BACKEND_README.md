# Todo App - Backend

Node.js and Express API server for the Todo application.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```
MONGO_URI=mongodb+srv://harshalshahhss:Skyhss2005@cluster0.vcsn5kt.mongodb.net/todo-app
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
```

### 3. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication Endpoints

**Sign Up**
```
POST /api/auth/signup
Body: { name, email, password }
Response: { message, token }
```

**Login**
```
POST /api/auth/login
Body: { email, password }
Response: { message, token }
```

**Get Current User**
```
GET /api/auth/me
Headers: Authorization: Bearer {token}
Response: { _id, name, email, createdAt, updatedAt }
```

### Todo Endpoints (All require Bearer token in Authorization header)

**Get All Todos**
```
GET /api/todos
Headers: Authorization: Bearer {token}
Response: [{ _id, title, description, completed, userId, createdAt, updatedAt }, ...]
```

**Create Todo**
```
POST /api/todos
Headers: Authorization: Bearer {token}
Body: { title, description }
Response: { _id, title, description, completed, userId, createdAt, updatedAt }
```

**Get Single Todo**
```
GET /api/todos/:id
Headers: Authorization: Bearer {token}
Response: { _id, title, description, completed, userId, createdAt, updatedAt }
```

**Update Todo**
```
PUT /api/todos/:id
Headers: Authorization: Bearer {token}
Body: { title, description, completed }
Response: { _id, title, description, completed, userId, createdAt, updatedAt }
```

**Delete Todo**
```
DELETE /api/todos/:id
Headers: Authorization: Bearer {token}
Response: { message }
```

**Search Todos**
```
GET /api/todos/search/:query
Headers: Authorization: Bearer {token}
Response: [{ _id, title, description, completed, userId, createdAt, updatedAt }, ...]
```

## Database Schema

### User Schema
- `name` (String, required)
- `email` (String, required, unique)
- `password` (String, required, hashed)
- `timestamps` (createdAt, updatedAt)

### Todo Schema
- `title` (String, required)
- `description` (String, optional)
- `completed` (Boolean, default: false)
- `userId` (ObjectId, ref: User, required)
- `timestamps` (createdAt, updatedAt)

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **dotenv**: Environment variables
- **cors**: Cross-origin requests
- **nodemon**: Development auto-reload

## File Structure

```
backend/
├── models/           # Database models
│   ├── User.js
│   ├── Todo.js
│   └── index.js
├── routes/           # API routes
│   ├── auth.js
│   └── todo.js
├── middleware/       # Custom middleware
│   └── auth.js
├── server.js         # Main server file
├── package.json
├── .env              # Environment variables
└── .gitignore
```

## Security Notes

- All passwords are hashed using bcryptjs before storing in database
- JWT tokens expire after 7 days
- Each user can only access their own todos
- Always change JWT_SECRET in production
- Never commit .env file to version control

## Testing the API

You can test the API using Postman or curl:

```bash
# Sign up
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Get todos (replace TOKEN with actual token)
curl -X GET http://localhost:5000/api/todos \
  -H "Authorization: Bearer TOKEN"
```

---

For frontend documentation, see `Frontend README` in the readme folder.
