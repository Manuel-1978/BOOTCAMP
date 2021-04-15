//Hacer una petición a a la API de https://jsonplaceholder.typicode.com/comments. 
//Con el array que nos llegue, iremos rellenado nuestra ul con <li> con los 
//primeros 20 elementos

const URL = "https://jsonplaceholder.typicode.com/comments"

const ul= document.getElementById("ul");

function fillList (comments){
    comments.slice(0,20).forEach(comment => {
        ul.innerHTML += `<li>${comment.name}</li>`
    });
}
function paginator(items,current_page,per_page_items){
  let page= current_page||1,
  per_page= per_page_items||20,
  offset=(page-1)*per_page,
  paginatedItems =items.slice(offset).slice(0,per_page_items),
  total_pages= Math.ceil(items.lenght/per_page);
}

const URL1 ="https://jsonplaceholder.typicode.com/posts"
 
const container= document.getElementById("container");

function titleComents (posts){
    posts.forEach(post=>{
        container.innerHTML += `<h2>${post.title}</h2><p>${post.body}</p>`
    })
}

fetch(URL)
  .then(response =>{
      console.log(response);    
        if(response.ok){
       return response.json();
      }
      throw Error ("Hay algún problemas con la respuesta: "+ response.statusText)
    })
    .then(data => {
   fillList(data);
    })    
.catch(error=>console.log(error));
 
fetch(URL1)
  .then(response =>{
      console.log(response);    
        if(response.ok){
       return response.json();
      }
      throw Error ("Hay algún problemas con la respuesta: "+ response.statusText)
    })
        .then(data => {
        titleComents(data);
         })
.catch(error=>console.log(error));

fetch(URL1)
  .then(response =>{
      console.log(response);    
        if(response.ok){
       return response.json();
      }
      throw Error ("Hay algún problemas con la respuesta: "+ response.statusText)
    })
        .then(data => {
        paginator(data);
         })
.catch(error=>console.log(error));


