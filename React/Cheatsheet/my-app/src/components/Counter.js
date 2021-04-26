import {useState} from 'react';
/*import FirstComponent from './FirstComponent'*/
export default function Counter() {
    // const state = useState(0);

    // const count = useState[0];
    // const setCount = useState[1];
    const [count,setCount] = useState(0);
    
    const handleClick = function () {
    if (count < 10){
    
    setCount(count+1);
}
}
    return (
        <div>
            <p>Has hecho click {count} veces</p>
            <button onClick={handleClick}>Hazme Click</button>
            <button onClick={()=> count> 0 && setCount(count -1) }>Bajar Cantidad</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
