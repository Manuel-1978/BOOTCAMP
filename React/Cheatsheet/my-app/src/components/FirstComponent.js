import {Fragment} from "react";
import PropTypes from "prop-types";
export default function FirstComponent(props) {
    // console.log(props, typeof props);
    // console.log(props.title);
   
    const myFunction= function (name) {
        return (evento)=>console.log(name.evento);
        
    }
   
   
   
    return (
        <Fragment>
           <h3>{props.title}</h3> 
           <small>{props.date}</small>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           <button onClick={myFunction("Marta")}>Imprimir a Marta!</button>
           <button onClick={myFunction("Miguel")}>Imprimir a Miguel!</button>
          {/* <button onClick={()=>event=>console.log(1,event)}>Toda la gestion inLine</button> */}
           </Fragment>

    )
}
//Declaro propediades por defecto
FirstComponent.defaultProps={
title:"!!!!!!!!!!!!!",
date:"Sin"
}
//Validar Propiedades
FirstComponent.propTypes={
    title:PropTypes.string.isRequired,
    date:PropTypes.string,
    products:PropTypes.array,
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

