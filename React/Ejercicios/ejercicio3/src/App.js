import React from 'react'
import './App.css';
import ListContact from './Componenst/ListContac';

function App() {
  let contactList ={

   Persondata :[
    {Contacto:0,Name:"Francisco",Surname:"Martinez",Address:"Calle del Pernambuco numero 2",City:"Oviedo",Postcode:33193 ,TelephonNumber:655448822 },
    
   ]
  };
  return (
    <div className="App">
    
    
        <ListContact category ="Personsdata" Name={contactList.Persondata}/>
       
    
    </div>
  );
}

export default App;
