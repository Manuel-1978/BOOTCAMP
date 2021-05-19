import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from './pages/Principal'

export default function Router() {
    
    
    return (
        <BrowserRouter>
         
        <Switch>
            <Route exact path='/' component={Principal}/>
        </Switch>
    </BrowserRouter>
    )
}