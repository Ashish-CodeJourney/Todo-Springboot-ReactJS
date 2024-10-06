import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ refreshTodos }) => {
  const [id, setId] = useState('');
  const [content, setContent] = useState('');

  const addTodo = async (e) => {
    e.preventDefault();
    if (!id || !content) {
      alert('Please provide both id and content!');
      return;
    }
    try {
      await axios.post('http://localhost:8080/todos', { id: parseInt(id), content });
      setId('');
      setContent('');
      refreshTodos(); // Refresh the todo list after adding a new todo
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={addTodo} className="mb-6 space-y-4 w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Todo</h2>
      <div className="space-y-3">
        <div className="flex flex-col space-y-2">
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter Todo ID"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter Todo Content"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition ease-in-out duration-300"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
