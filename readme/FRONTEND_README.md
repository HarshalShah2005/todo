# Todo App - Frontend

React-based web interface for the Todo application with Tailwind CSS styling.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the frontend directory:

```
REACT_APP_API_URL=http://localhost:5000
```

This URL should match your backend server URL.

### 3. Run the Application

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Features

### Authentication Pages

**Login Page** (`/login`)
- Email and password login
- Link to signup page
- Error handling and display

**Signup Page** (`/signup`)
- Name, email, and password signup
- Link to login page
- Error handling and display

### Todo Management Page** (`/todos`)
- Add new todos with title and description
- View all your todos
- Mark todos as completed
- Delete todos
- Search todos by title or description
- User navbar with logout button

## Components

### AuthContext (`src/context/AuthContext.js`)
- Manages user authentication state
- Handles signup, login, and logout
- Stores JWT token in localStorage
- Provides auth state to entire app

### ProtectedRoute (`src/components/ProtectedRoute.js`)
- Protects routes that require authentication
- Redirects unauthenticated users to login

### Navbar (`src/components/Navbar.js`)
- Displays app title and user email
- Logout button

### AddTodo (`src/components/AddTodo.js`)
- Form to add new todos
- Title and description inputs
- Error handling

### TodoItem (`src/components/TodoItem.js`)
- Displays individual todo
- Complete/incomplete toggle
- Delete button
- Visual feedback for completed todos

### Pages

**Login.js** - User login page
**Signup.js** - User registration page
**TodoList.js** - Main todo management page

## File Structure

```
frontend/
├── public/              # Static files
│   └── index.html
├── src/
│   ├── components/      # Reusable components
│   │   ├── AddTodo.js
│   │   ├── TodoItem.js
│   │   ├── Navbar.js
│   │   └── ProtectedRoute.js
│   ├── context/         # React context
│   │   └── AuthContext.js
│   ├── pages/           # Page components
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   └── TodoList.js
│   ├── App.js           # Main app component
│   ├── index.js         # React entry point
│   ├── index.css        # Global styles
│   ├── tailwind.config.js  # Tailwind configuration
│   └── postcss.config.js   # PostCSS configuration
├── package.json
├── .env                 # Environment variables
└── .gitignore
```

## Styling

The application uses **Tailwind CSS** for styling. All styles are utility-based and responsive.

### Key Classes Used
- `bg-blue-600` - Primary blue color
- `hover:bg-blue-700` - Hover states
- `px-4 py-2` - Padding
- `rounded-lg` - Border radius
- `shadow-lg` - Box shadow
- `text-center` - Text alignment
- `flex`, `gap-4` - Flexbox layouts

## How to Use the Application

1. **Create Account**
   - Click "Sign up" link on login page
   - Enter name, email, and password
   - Click "Sign Up" button
   - You'll be redirected to your todos page

2. **Login**
   - Enter your email and password
   - Click "Login" button
   - You'll be redirected to your todos page

3. **Add a Todo**
   - Type title in the "Title" field
   - Optionally add description
   - Click "Add Todo" button

4. **Complete a Todo**
   - Click the checkbox next to a todo
   - The todo will show as completed with a strikethrough

5. **Delete a Todo**
   - Click the "Delete" button on the right side
   - Confirm the deletion

6. **Search Todos**
   - Type in the search box
   - Results filter automatically by title and description

7. **Logout**
   - Click the "Logout" button in the navbar
   - You'll be redirected to the login page

## Dependencies

- **react**: UI framework
- **react-dom**: React DOM rendering
- **react-router-dom**: Client-side routing
- **axios**: HTTP client for API calls
- **tailwindcss**: Utility-first CSS framework
- **react-scripts**: Build scripts and configuration

## Local Storage

- JWT token is stored in browser's localStorage
- Token persists across browser sessions
- Token is removed when user logs out

## API Integration

The frontend communicates with the backend API at `REACT_APP_API_URL`.

All API requests include JWT token in Authorization header:
```javascript
headers: { Authorization: `Bearer ${token}` }
```

## Error Handling

- Form validation for required fields
- API error messages displayed to user
- Automatic logout if token expires
- Confirmation before deleting todos

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

For backend documentation, see `Backend README` in the readme folder.
