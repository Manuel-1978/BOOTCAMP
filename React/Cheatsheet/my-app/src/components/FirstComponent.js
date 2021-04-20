import {Fragment} from "react";

export default function FirstComponent(props) {
    console.log(props, typeof props);
    console.log(props.title);
    return (
        <Fragment>
           <h3>{props.title}</h3> 
           <small>{props.date}</small>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           <button>Click me!</button>
           </Fragment>

    )
}

//Solo se puede hacer un export default por archivo
function SecondComponent() {
    return(
    <>
        <h1>Soy otro Componente</h1>
   </>
    )
}

function ThirdComponent() {
    return(
        <>
        <h1>Soy tercer Componente</h1>
    </>
    )
}
export{SecondComponent, ThirdComponent}; //exportamos las funciones entre llaves

