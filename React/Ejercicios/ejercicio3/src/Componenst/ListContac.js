import React from 'react'

export default function ListContac(category,Name) {
    return (
     <div>
          
      <ul className="list-group w-50">
          
        <li className="list-group-item active" aria-current="true">{category}</li>
          
         {
                Name.map(({id,Name,Surname,Address,city,Postcode,TelephoneNumber})=>
                  {    
                      <li key={id} className="list-group-item list-group-item-success">
                       {Name}{Surname}{Address}{city}{Postcode}{TelephoneNumber}
                    </li>
                  })
          }
      </ul>
     </div>
    )
}

