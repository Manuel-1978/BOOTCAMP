import{useState} from "react";
import{useHistory} from "react-router-dom";

export default function Dashboard() {
    const [userID,setUserID]= useState(0)

    const history= useHistory();

    function handleClick(){
    //queremos que nos lleve a *record/userId
    history.push(`/record/${userID}`)}
    return (
        <div>
             <input type="text" onChange ={ e => setUserID(e.target.value)} value={userID} />
             <button onClick={handleClick}>Ir a perfirl del Usuario {userID}</button>

        </div>
    )
}
