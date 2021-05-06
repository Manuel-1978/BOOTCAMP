import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

    return (
        <div className="navbar navbar-light bg-light form-inline bg-dark" >
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="Logo TMDb"/>
                 <input type="search" placeholder="Search" className="form-control w-25  m-sm-2 "/>
                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 
         </div>
                   
             
       
      )

}
