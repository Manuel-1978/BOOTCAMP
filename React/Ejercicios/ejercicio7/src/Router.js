import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from './pages/Principal'
import Movie from './pages/Movie';

export default function Router() {
    
    
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/Principal' component={Principal}/>
            <Route path='/movie/:id' component={Movie} />
        </Switch>
    </BrowserRouter>
    )
}
