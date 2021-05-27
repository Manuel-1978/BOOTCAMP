
import {useEffect,useState} from 'react';
 import {URL_USERS} from '../setting';

export default function Userlogin() {

   const [users, setUsers] = useState({});

    useEffect(() => {
      
        fetch(URL_USERS)
        .then(response => response.json())
        .then(data=>{setUsers(data)});
       
    }, []);


    return (
        <div>
             <div className="userLogin">
                        <div className="userLogin2">
                            <label >Usuario: </label>
                            <br/>
                            <input type="text" className="inputuser" name="username" />
                            <br/>
                            <label >Password: </label>
                            <br/>
                            <input type="text" className="inputpassword" name="password" />
                            <br/><br/>
                            <button className="btn-access">Iniciar Sesión</button>
                        </div>
                    </div>
        </div>
    )
}
