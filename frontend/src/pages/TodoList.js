import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import API from '../api';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';

const TodoList = () => {
  const { token } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTodos();
  }, [token]);

  useEffect(() => {
    if (searchQuery.trim()) {
      handleSearch();
    } else {
      setFilteredTodos(todos);
    }
  }, [searchQuery, todos]);

  const fetchTodos = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `${API}/api/todos`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTodos(response.data);
      setFilteredTodos(response.data);
    } catch (err) {
      setError('Error fetching todos');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setFilteredTodos(todos);
      return;
    }

    try {
      const response = await axios.get(
        `${API}/api/todos/search/${searchQuery}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFilteredTodos(response.data);
    } catch (err) {
      console.error('Error searching todos:', err);
      setFilteredTodos([]);
    }
  };

  const handleTodoAdded = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const handleTodoUpdate = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo)));
  };

  const handleTodoDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo._id !== todoId));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <AddTodo onTodoAdded={handleTodoAdded} token={token} />

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-bold mb-4">Search Todos</h2>
            <input
              type="text"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-8 text-gray-600">Loading todos...</div>
          ) : (
            <div>
              <h2 className="text-xl font-bold mb-4">
                {searchQuery ? `Search Results (${filteredTodos.length})` : `Your Todos (${filteredTodos.length})`}
              </h2>

              {filteredTodos.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow text-center text-gray-600">
                  {searchQuery
                    ? 'No todos found matching your search'
                    : 'No todos yet. Create one to get started!'}
                </div>
              ) : (
                <div>
                  {filteredTodos.map((todo) => (
                    <TodoItem
                      key={todo._id}
                      todo={todo}
                      onUpdate={handleTodoUpdate}
                      onDelete={handleTodoDelete}
                      token={token}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoList;
