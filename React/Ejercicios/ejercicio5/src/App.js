import{BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import './App.css';
import ejercicio1   from './Pages/ejercicio1';
import ejercicio2 from './Pages/ejercicio2';
import ejercicio3 from './Pages/ejercicio3';
import ejercicio4 from './Pages/ejercicio4';


export default function App() {
  
  
  return (
    <BrowserRouter>
     <nav className="navbar px-5 py-3 bg-dark " >
       <NavLink className="text-decoration-none text-light font-weight-bold" activeClassName="active" to="/">Ejercicio 1</NavLink>
       <NavLink className="text-decoration-none text-light font-weight-bold" activeClassName="active"  to="/ejercicio2">Ejercicio 2</NavLink>
       <NavLink className="text-decoration-none text-light font-weight-bold" activeClassName="active"  to="/ejercicio3">Ejercicio 3</NavLink>
       <NavLink className="text-decoration-none text-light font-weight-bold" activeClassName="active"  to="/ejercicio4">Ejercicio 4</NavLink>
    </nav>
        <Switch>
          <Route path="/"           component={ejercicio1} />
          <Route path="/ejercicio2" component={ejercicio2} />
          <Route path="/ejercicio3" component={ejercicio3} />
          <Route path="/ejercicio4" component={ejercicio4} />
        </Switch> 
   </BrowserRouter>
   
  );
}


