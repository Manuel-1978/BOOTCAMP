import 'bootstrap/dist/css/bootstrap.min.css';
import {URL_LOGO_TMBD} from "../settings"
export default function Navbar() {

    return (
        <div className="navbar navbar-light bg-light form-inline bg-dark" >

            <img src={URL_LOGO_TMBD} alt="Logo TMDb"/>
                 <input type="search" placeholder="Search" className="form-control w-25  m-sm-2 "/>
                
                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 
         </div>
                   
             
       
      )

}
