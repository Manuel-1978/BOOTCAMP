
import './App.css';
import FirstComponent,{SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from "./components/Counter" ;
import UseEffectComponent from './components/UseEffectComponent';
 
import { useState,createContext } from 'react';
import UseContextComponent from './components/UseContextComponents';
   import Router from './Router'
export const GlobalContext= createContext();

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
     {/*{show && <UseEffectComponent />}
<button onClick={()=>setShow(!show)}>Show</button>

    <Counter />
     <FirstComponent title="Titulo enviado desde el padre" date="16 de agosto de 2025" />
     <FirstComponent title="Otro titulo" date="17 de agosto de 2025" />
     <SecondComponent />
     <ThirdComponent />
       <UseEffectComponent/>
      
       <GlobalContext.Provider value="Soy un string en un contexto">
       <UseContextComponent />
       </GlobalContext.Provider> */}
  
      <Router />


    </div>
  );
}

export default App;
