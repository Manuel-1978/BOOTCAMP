import { useState} from 'react';

export default function Input({setTodoList}) {

    const initialState={
        userId:"",
        title:"",
        completed:""
};

const[form,setForm]= useState(initialState)

function handleInput(e) {

    const inputName= e.target.id;
    const newValue= e.target.value;
    setForm({...form,...{[inputName]: newValue}})
    
}
function submit(e) {
    e.preventDefault();
    setTodoList(currentList => [...currentList ,newList]);
    setForm(initialState);

const newList ={
            userId:form.userId,
            title:form.title,
            completed:form.completed
        };
    }



    return (
        <form className="container-sm mr-3 p-2"onSubmit={submit} >
           <input id="title" value={form.title}  onChange={handleInput} className=" form-control w-2000" placeholder="Introduce un nuevo To-do"/>
        </form>
    )
}
