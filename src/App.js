import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
