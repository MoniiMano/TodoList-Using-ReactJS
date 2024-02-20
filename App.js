import React, { useState } from 'react'
import './App.css';
import Todo from './Todo';
import TodoList from './TodoList';


const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updateTodo = todos.map((t) => t.id === editTodo.id ? (
        t = { id: t.id, todo }) : { id: t.id, todo: t.todo }
      );
      setTodos(updateTodo);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((list) => list.id !== id)
    setTodos([...delTodo]);


  }

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 style={{fontSize:"45px", }}>Todo List</h1>
        <Todo handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId} />
       <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>

      </div>
    </div>
  )
}

export default App