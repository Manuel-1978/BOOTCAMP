import { BrowserRouter,Route, Switch } from "react-router-dom";
import Principal from './pages/Principal';
import Users from './pages/Users';
import New_user from './pages/New_user';
import Navbar from './components/Navbar';

export default function Router() {
    
    
    return (
        <BrowserRouter>
        
         <Navbar />
        <Switch>
            <Route exact path='/' component={Principal}/>
            <Route path="/Users" component={Users}/>
            <Route path="/New_user" component={New_user}/>
        </Switch>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    </BrowserRouter>
    )
}
