import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Record() {

    const [userData, setUserData] = useState({});

    const {userID} = useParams(); // Devuelve un objeto con los parametros recibios por URL

    const USERS_URL = "https://reqres.in/api/users/";

    useEffect(() => {
        fetch(`${USERS_URL}${userID}`)
        .then(response => response.json())
        .then(data => setUserData(data));
        
        return () => setUserData({});
    }, [userID]);

    return (
        <div className="h-100 container p-5 d-flex flex-column align-items-center justify-content-center">
            {/* Record of {props.match.params.user} */}
            <h2>{userID ? `Record of user ${userID}` : "No hay usuario especificado"}</h2>
            {userID &&
                <div className="card w-50">
                    <img className="card-img-top img-fluid" src={userData.data?.avatar} alt="Profile" />
                    <div className="card-body">
                        <h5 className="card-title">{userData.data?.first_name} {userData.data?.last_name}</h5>
                        <p className="card-text">{userData.data?.email}.</p>
                    </div>
                </div>
            }
        </div>
    )
}
