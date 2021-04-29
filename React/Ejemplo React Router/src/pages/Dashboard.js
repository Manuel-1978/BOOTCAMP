import {useState} from "react";
import {useHistory} from "react-router-dom";

export default function Dashboard() {

    const [userID, setUserID] = useState(1);

    const history = useHistory();

    function handleClick() {
        // Queremos que nos lleve a /record/userID
        console.log(userID);
        history.push(`/record/${userID}`);
    }

    return (
        <form className="container my-5 form-inline justify-content-between">
            <h1 className="mb-4">Panel de control</h1>
            <div className="form-group">
                <label htmlFor="userIdInput">Introduce el número de usuario </label>
                <input value={userID} onChange={e => setUserID(e.target.value)} id="userIdInput" type="text" className="form-control form-inline ml-3" />
            </div>
            <button className="btn btn-success" onClick={handleClick}>Ir al usuario {userID}</button>
        </form>
    )
}
