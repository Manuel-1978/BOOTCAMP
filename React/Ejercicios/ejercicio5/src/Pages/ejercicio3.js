import{useState} from "react";
import './App.css';
import ListContact from '../Componets/ListContac';
import NewContactForm from '../Componets/NewContactForm';

function App() {

const initialContactsState =[
  {name:"Francisco",lastName: "Garcia Perez", address:"Calle x",city:"Granada",postalCode:18010,phoneNumber:666235547},
  {name:"Francisco",lastName: "Ramirez Perez", address:"Calle y",city:"Granada",postalCode:18010,phoneNumber:666235548},
  {name:"Francisco",lastName: "Fernandez Perez", address:"Calle f",city:"Granada",postalCode:18010,phoneNumber:666235549},
];
 const [contacts,setContacts] = useState(initialContactsState);
 
  return (
    <div className="container">

    <h2 className="my-4">Agenda</h2>
    <ListContact contacts={contacts} setContacts={setContacts} />

    <h2 className="my-4">Formulario</h2>
    <NewContactForm setContacts={setContacts}/>
        
    
    </div>
  );
}

export default App;
