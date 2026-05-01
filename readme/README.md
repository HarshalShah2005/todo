# Todo Application - MERN Stack

A simple full-stack Todo application built with MongoDB, Express, React, and Node.js.

## Features

- **User Authentication**: Sign up, login, and logout functionality
- **Add Todos**: Create todos with title and description
- **Complete Todos**: Mark todos as completed with a checkbox
- **Delete Todos**: Remove todos you no longer need
- **Search Todos**: Search through your todos by title or description
- **Responsive Design**: Clean and simple UI with Tailwind CSS

## Project Structure

```
todo/
├── backend/          # Node.js & Express API
├── frontend/         # React application
└── readme/           # Documentation files
```

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Bcryptjs for password hashing

**Frontend:**
- React 18
- React Router
- Axios (for API calls)
- Tailwind CSS (for styling)

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB connection URL
- npm or yarn

### Installation & Running

1. **Clone or extract the project**

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

3. **Frontend Setup** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The frontend will run on `http://localhost:3000`

4. **Access the Application**
   - Open `http://localhost:3000` in your browser
   - Create an account or login
   - Start managing your todos!

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)

### Todos
- `GET /api/todos` - Get all todos for user (requires token)
- `POST /api/todos` - Create a new todo (requires token)
- `PUT /api/todos/:id` - Update a todo (requires token)
- `DELETE /api/todos/:id` - Delete a todo (requires token)
- `GET /api/todos/search/:query` - Search todos (requires token)

## Environment Variables

**Backend (.env)**
```
MONGO_URI=your_mongodb_connection_url
JWT_SECRET=your_secret_key
PORT=5000
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000
```

## How to Use

1. **Sign Up**: Create a new account with name, email, and password
2. **Login**: Login with your credentials
3. **Add Todo**: Click "Add New Todo" and fill in title and description
4. **Complete Todo**: Click the checkbox next to a todo to mark it as complete
5. **Delete Todo**: Click the Delete button to remove a todo
6. **Search**: Use the search box to find todos by title or description
7. **Logout**: Click the Logout button in the navbar to logout

## Notes

- Each user can only see and manage their own todos
- Passwords are securely hashed using bcryptjs
- JWT tokens are used for authentication
- All data is stored in MongoDB

---

For detailed information about backend and frontend setup, see the README files in the respective directories.
