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


const URL1 ="https://jsonplaceholder.typicode.com/posts"
 
const container= document.getElementById("container");

function titleComents (posts){
    posts.slice(0.20).forEach(post=>{
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


