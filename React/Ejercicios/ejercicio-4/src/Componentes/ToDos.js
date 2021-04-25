

export default function ToDos({toDos,setTodoList}) {
    function crossedOut(e) {
        if(e.target.tagName !== "BUTTON"){
            e.target.style.backgroundColor="whiteSmoke";
            e.target.style.textDecoration="line-through";
           ;
        }
    }
    const removeLine = title =>{return e => setTodoList(toDos.filter( toDo => toDo.title !== title))}

    return (
        
         <ul className= "container-lg m-auto col-12 col-sm-6 " >
            {   
               toDos.map(({userId,title,completed})=>
                   {  return <li  className="list-group-item text-left" onClick= {crossedOut} key={title}>  
                      {userId} &nbsp; {title}&nbsp;{completed}&nbsp;
                     <button  className="tn btn-danger float-right" onClick={removeLine(title)}>x</button>
                     </li>
               } )
            }
        </ul>
      
    )
}
