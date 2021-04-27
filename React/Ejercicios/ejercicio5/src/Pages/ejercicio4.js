
import './App.css';
import Todos from '../Componets/Input';
import Input from '../Componets/ToDos';
import { useState,useEffect} from 'react';
export default function App() {
  
  const [TodoList,setTodoList]= useState([]);
   
  useEffect(() => {
    const URL ="https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"
    fetch(URL)
    .then(response=>response.json())
    .then (data=> setTodoList(data.splice(0,20)));
      },[])

  return (
    <div className="App">
      <h3 className="container ml-3">Todo List</h3>
      <Input setTodoList={setTodoList}/>
      <Todos toDos={TodoList} setTodoList={setTodoList} />
    
    </div>
  );
}


