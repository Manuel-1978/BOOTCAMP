import{BrowserRouter, Route, Switch,NavLink} from "react-router-dom";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Error from "./pages/Error";

export default function Router() {
    return (
        <BrowserRouter>
<NavLink to ="/" >Ir a Inicio &nbsp;</NavLink>
<NavLink to ="/dashboard" >Panel de control &nbsp;</NavLink>
<NavLink to ="/record/1">Record &nbsp;</NavLink>
<NavLink to ="/record/2">2 &nbsp;</NavLink>
<NavLink to ="/record/3">3 &nbsp;</NavLink>
<NavLink to ="/record/4">4 &nbsp;</NavLink>
<NavLink to ="/record/5">5 &nbsp;</NavLink>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path ="/record/:user" component={Record}/>
            
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}
