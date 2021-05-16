
import './App.css';
import ToDos from './Componentes/ToDos';
import NewTodo from './Componentes/NewTodo';
import { useState,useEffect} from 'react';
export default function App() {
  
  const [todos,setTodos]= useState([]);
   
  useEffect(() => {
    const API_TODOS ="https://localhost:3001/to-do"
    fetch(API_TODOS)
    .then(response=>response.json())
    .then (data=> setTodos(data.slice(0,20)));
      },[])

  return (
    <div className="App">
      <h3 className="container ml-3">Todo List</h3>
      <NewTodo setTodos={setTodos}/>
      <ToDos todos={todos} setTodos={setTodos} />
    
    </div>
  );
}


