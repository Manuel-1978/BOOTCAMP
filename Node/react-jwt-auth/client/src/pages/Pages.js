import Public from "./Public";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";
import {Route,Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export default function Pages() {
    return (
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/public" component={Public}/>
       <PrivateRoute path ="/dashboard">
           <Dashboard /> {/*este será el children en PrivateRoute.js */}
       </PrivateRoute>
        <Route component={Error}/>
         </Switch>
    )
}
