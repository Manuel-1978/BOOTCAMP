import{useState} from "react";


export default function NewUsertForm({setUsers}) {

    const initialState={
            name:"",
            lastName:"",
            address:"",
            postalCode:"",
            identity:"",
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
   
       setUsers(currentContacts => [...currentContacts,newContact]);
        setForm(initialState);

        const newContact ={
            name: form.name,
            lastName:form.lastName,
            address:form.address,
            postalCode:form.postalCode,
            identity:form.identity,
            phoneNumber:form.phoneNumber
        };

   }
    return (
        <div className="form" onSubmit={submit}>
        <input id="name"        value={form.name}        onChange={handleInput} className="formInput" type="text" placeholder="Introduce el nombre"/>
        <input id="lastName"    value={form.lastName}    onChange={handleInput} className="formInput" type="text" placeholder="Introduce los apellidos"/>
        <input id="phoneNumber" value={form.phoneNumber} onChange={handleInput} className="formInput" type="text" placeholder="Introduce el teléfono"/>
        <input id="address"     value={form.address}     onChange={handleInput} className="formInput" type="text" placeholder="Introduce la dirección"/>
        <input id="postalCode"  value={form.postalCode}  onChange={handleInput} className="formInput" type="text" placeholder="Introduce el código postal"/>
        <input id="identity"        value={form.identity}        onChange={handleInput} className="formInput" type="text" placeholder="Introduce DNI-NIF-CIF"/>
        <input className="formInput" type="submit"  value="Registrar"/>
        </div>
    )
  }