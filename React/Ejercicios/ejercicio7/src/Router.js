import {BrowserRouter, Route, Switch} from "react-router-dom";
import UpcomingFilms from "./Components/UpcomingFilms";
import FilmDetails from "./Components/FilmDetails"



export default function Router() {
    return (
        <div>
           <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={UpcomingFilms}/>
                   
                  <Route path='/film/:id' component={FilmDetails}/>
              </Switch>      
           </BrowserRouter> 
        </div>
    )
}
