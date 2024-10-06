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
    <form onSubmit={addTodo} className="mb-4">
      <div className="space-y-2">
        <div className="flex space-x-2">
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="flex-grow border p-2 rounded"
            placeholder="Enter Todo ID"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-grow border p-2 rounded"
            placeholder="Enter Todo Content"
          />
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
