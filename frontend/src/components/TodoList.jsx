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
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="bg-gray-100 p-2 rounded shadow">
            <strong>ID:</strong> {todo.id} - <strong>Content:</strong> {todo.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
