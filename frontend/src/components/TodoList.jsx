import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todo List</h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transform transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">
                <strong>ID:</strong> {todo.id}
              </span>
              <span className="text-lg font-medium">
                <strong>Content:</strong> {todo.content}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
