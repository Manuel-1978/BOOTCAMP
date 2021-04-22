import{useState} from "react";


export default function NewContactForm({setContacts}) {

    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [address, setAddress] = useState("");
    // const [postalCode, setPostalCode] = useState("");
    // const [city, setCity] = useState("");
    
    // function handleName(e) {
    //     setName (e.target.value)
    // }
    // function handleLastName(e) {
    //     setLastName (e.target.value)
    // }
    // function handlePhoneNumber(e) {
    //     setPhoneNumber (e.target.value)
    // }
    // function handleAddress(e) {
    //     setAddress (e.target.value)
    // }
    // function handlePostalCode(e) {
    //     setPostalCode (e.target.value)
    // }
    // function handleCity(e) {
    //     setCity (e.target.value)
    //}
  const InitialState={
            name:"",
            lastName:"",
            address:"",
            postalCode:"",
            city:"",
            phoneNumber:""
   }

    const[form,setForm]=useState(initialState)
    function handleInput(e) {
        console.log(e.target.name);
        
        // const newContact ={
        //     name:name,
        //     lastName:lastName,
        //     address:address,
        //     postalCode:postalCode,
        //     city:city,
        //     phoneNumber:phoneNumber
        // };
       
    //const newContact= {name,lastName,address,postalCode,city,phoneNumber};
       //setContacts([...contacts,newContact])//Necesitaría recibir "contacts"
       // setContacts(currentContacts => [...currentContacts,newContact]);
       // e.target.reset();
   // }
   function submit(e) {
       
   }
    return (
        <form className="form-group" onSubmit={submit}>
        <input name="name"       value={form.name}        onChange={handleInput}    className="form-control mb-3" type="text" placeholder="Introduce el nombre"/>
        <input name="lastName"   value={form.lastName}    onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce los apellidos"/>
        <input name="address"    value={form.address}     onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el teléfono"/>
        <input name="postalCode" value={form.postalCode}  onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la dirección"/>
        <input name="city"       value={form.city}        onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el código postal"/>
        <input name="phoneNumber"value={form.phoneNumber} onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la ciudad"/>
        <input type="submit" className="btn btn-success" value="Registrar"/>
        </form>
    )
  }
} 