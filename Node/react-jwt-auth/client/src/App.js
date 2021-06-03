import{BrowserRouter as Router,Route,Switch, NavLink} from "react-router-dom"
import Navbar from "./components/Navbar"
import Public from "./pages/Public"


function App() {
  return (
    <div>
     <Router>
       <Navbar />
     </Router>
    </div>
  );
}

export default App;
