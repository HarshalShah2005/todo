import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../api';

const TodoItem = ({ todo, onUpdate, onDelete, token }) => {
  const handleToggle = async () => {
    try {
      const response = await axios.put(
        `${API}/api/todos/${todo._id}`,
        { completed: !todo.completed },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      onUpdate(response.data);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        await axios.delete(
          `${API}/api/todos/${todo._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        onDelete(todo._id);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  };

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow mb-3 flex items-center justify-between ${
        todo.completed ? 'bg-gray-100' : ''
      }`}
    >
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={handleToggle}
          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer ${
            todo.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {todo.completed && <span className="text-white font-bold">✓</span>}
        </button>

        <div className="flex-1">
          <h3
            className={`font-semibold ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}
          >
            {todo.title}
          </h3>
          {todo.description && (
            <p className={`text-sm ${todo.completed ? 'text-gray-400' : 'text-gray-600'}`}>
              {todo.description}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
