import{useState} from "react";


export default function NewUsertForm({setUsers}) {

    const initialState={
            name:"",
            lastName:"",
            identity:"",
            company:"",
            email:"",
            username:"",
            password:"",           
            phoneNumber:""
   };

     const[form,setForm]= useState(initialState)

    function handleInput(e) {

        const inputName= e.target.id;
        const newValue= e.target.value;
        setForm({...form,...{[inputName]: newValue}})
        
    }
  
   function submit(e) {
     
    e.preventDefault();  
  
      // setUsers(currentContacts => [...currentContacts,newContact]);
        setForm(initialState);

        const newContact ={
            name: form.name,
            lastName:form.lastName,
            identity:form.identity,
            company:form.company,
            email:form.email,
            username:form.username,
            password:form.password,           
            phoneNumber:form.phoneNumber
        };

   }
    return (
        <form className="form" onSubmit={submit}>
        <input id="name"        value={form.name}        onChange={handleInput} className="formInput" type="text" placeholder="Introduce el nombre"/>
        <input id="lastName"    value={form.lastName}    onChange={handleInput} className="formInput" type="text" placeholder="Introduce los apellidos"/>
        <input id="phoneNumber" value={form.phoneNumber} onChange={handleInput} className="formInput" type="text" placeholder="Introduce el teléfono"/>
        <input id="email"       value={form.email}       onChange={handleInput} className="formInput" type="text" placeholder="Introduce Email"/>        
        <input id="company"     value={form.company}     onChange={handleInput} className="formInput" type="text" placeholder="Introduce nombre de Empresa"/>
        <input id="username"    value={form.username}    onChange={handleInput} className="formInput" type="text" placeholder="Introduce su Username"/>
        <input id="password"    value={form.password}    onChange={handleInput} className="formInput" type="password" placeholder="Introduce el password"/>
        <input id="identity"    value={form.identity}    onChange={handleInput} className="formInput" type="text" placeholder="Introduce DNI-NIF-CIF"/>
        <input id="btn-newuser" className="formInput" type="submit"  value="Registrar"/>
        </form>
    )
  }