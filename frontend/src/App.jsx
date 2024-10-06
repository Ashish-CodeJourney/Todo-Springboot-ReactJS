import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshTodos = () => {
    setRefresh(!refresh); // Trigger re-fetching of todos
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <TodoForm refreshTodos={refreshTodos} />
      <TodoList key={refresh} />
    </div>
  );
};

export default App;
