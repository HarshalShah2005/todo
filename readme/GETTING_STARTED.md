# Getting Started Guide

A quick start guide to set up and run the Todo Application.

## Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Connection** (already provided)

## Step-by-Step Setup

### Step 1: Extract or Navigate to Project

Open terminal/command prompt in the project directory.

### Step 2: Start the Backend

```bash
cd backend
npm install
npm run dev
```

You should see: `Server is running on port 5000`

Keep this terminal open.

### Step 3: Start the Frontend

Open a **new terminal** in the project directory.

```bash
cd frontend
npm install
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### Step 4: Test the Application

1. **Sign Up**
   - Enter your name, email, and password
   - Click "Sign Up"

2. **Add Todos**
   - Enter a title and optional description
   - Click "Add Todo"

3. **Manage Todos**
   - Click checkbox to complete
   - Click "Delete" to remove
   - Use search box to find todos

4. **Logout**
   - Click "Logout" button in the top-right

## Troubleshooting

### Backend Issues

**Port 5000 already in use**
```bash
# Change PORT in .env file
PORT=5001
```

**MongoDB Connection Error**
- Verify MONGO_URI in `.env` is correct
- Check internet connection for MongoDB Atlas

**Module not found errors**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Frontend Issues

**npm start doesn't open browser**
- Manually navigate to `http://localhost:3000`

**API calls failing**
- Check REACT_APP_API_URL in `.env`
- Verify backend is running on correct port

**Blank page or errors in console**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

## Project Structure Overview

```
todo/
├── backend/
│   ├── models/          (User, Todo schemas)
│   ├── routes/          (auth, todo endpoints)
│   ├── middleware/      (authentication)
│   ├── server.js        (main server)
│   ├── package.json
│   └── .env             (configuration)
│
├── frontend/
│   ├── src/
│   │   ├── components/  (UI components)
│   │   ├── pages/       (Login, Signup, TodoList)
│   │   ├── context/     (Authentication state)
│   │   ├── App.js       (main app)
│   │   └── index.js     (entry point)
│   ├── public/
│   ├── package.json
│   └── .env             (configuration)
│
└── readme/
    ├── README.md                (overview)
    ├── BACKEND_README.md        (backend setup & API)
    ├── FRONTEND_README.md       (frontend setup & features)
    └── GETTING_STARTED.md       (this file)
```

## Key Features Implemented

✅ User authentication (signup/login/logout)
✅ Add todos with title and description
✅ Mark todos as complete
✅ Delete todos
✅ Search todos by title or description
✅ Responsive UI with Tailwind CSS
✅ Secure password hashing
✅ JWT token authentication
✅ User-specific todo management

## Database

The application uses **MongoDB** for data storage:
- **User Collection**: Stores user accounts and hashed passwords
- **Todo Collection**: Stores todos linked to users

All data is stored securely with user isolation.

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Database | MongoDB |
| Backend | Node.js + Express.js |
| Frontend | React.js |
| Styling | Tailwind CSS |
| Authentication | JWT |

## Common Commands

### Backend
```bash
npm install         # Install dependencies
npm run dev        # Start development server
npm start          # Start production server
```

### Frontend
```bash
npm install        # Install dependencies
npm start          # Start development server
npm run build      # Build for production
```

## Next Steps

After setting up:
1. Test the application thoroughly
2. Try all features (signup, login, add/complete/delete todos, search)
3. Check browser console (F12) for any errors
4. Read the detailed README files for more information

## Support

For detailed information:
- See `README.md` for project overview
- See `BACKEND_README.md` for API documentation
- See `FRONTEND_README.md` for frontend features

Happy coding! 🚀
