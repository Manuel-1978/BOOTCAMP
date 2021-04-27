import{BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ejercicio1   from './Pages/ejercicio1';
import ejercicio2 from './Pages/ejercicio2';
import ejercicio3 from './Pages/ejercicio3';
import ejercicio4 from './Pages/ejercicio4';


export default function App() {
  
  
  return (
    <BrowserRouter>
     <div className=" navbar  navbar-light bg-dark " >
       <NavLink className="d-flex justify-content-center p-3 flex-row text-success" to="/ejercicio1">Ejercicio 1</NavLink>
       <NavLink className="d-flex justify-content-center p-3 flex-row text-success"  to="/ejercicio2">Ejercicio 2</NavLink>
       <NavLink className="d-flex justify-content-center p-3 flex-row text-success"  to="/ejercicio3">Ejercicio 3</NavLink>
       <NavLink className="d-flex justify-content-center p-3 flex-row text-success"  to="/ejercicio4">Ejercicio 4</NavLink>
    </div>
        <Switch>
          <Route path="/ejercicio1" component={ejercicio1} />
          <Route path="/ejercicio2" component={ejercicio2} />
          <Route path="/ejercicio3" component={ejercicio3} />
          <Route path="/ejercicio4" component={ejercicio4} />
          

        </Switch> 
   </BrowserRouter>
   
  );
}


