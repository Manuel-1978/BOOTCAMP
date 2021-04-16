//Hacer una petición a a la API de https://jsonplaceholder.typicode.com/comments. 
//Con el array que nos llegue, iremos rellenado nuestra ul con <li> con los 
//primeros 20 elementos

// const URL = "https://jsonplaceholder.typicode.com/comments"

// const ul= document.getElementById("ul");

// function fillList (comments){
//     comments.slice(0,20).forEach(comment => {
//         ul.innerHTML += `<li>${comment.name}</li>`
//     });
// }

// const URL1 ="https://jsonplaceholder.typicode.com/posts"
 
// const container= document.getElementById("container");

// function titleComents (posts){
//     posts.forEach(post=>{
//         container.innerHTML += `<h2>${post.title}</h2><p>${post.body}</p>`
//     })
// }

// fetch(URL)
//   .then(response =>{
//       console.log(response);    
//         if(response.ok){
//        return response.json();
//       }
//       throw Error ("Hay algún problemas con la respuesta: "+ response.statusText)
//     })
//     .then(data => {
//    fillList(data);
//     })    
// .catch(error=>console.log(error));
 
// fetch(URL1)
//   .then(response =>{
//       console.log(response);    
//         if(response.ok){
//        return response.json();
//       }
//       throw Error ("Hay algún problemas con la respuesta: "+ response.statusText)
//     })
//         .then(data => {
//         titleComents(data);
//          })
// .catch(error=>console.log(error));




///ejercicio 6 Hecho en clase
const POST_URL ="https://jsonplaceholder.typicode.com/posts"
const PAGE_SIZE= 20;

//Variables
let posts=[];
let currentPage= 1;

//Selectores
const postsDiv= document.querySelector(".posts");
document.querySelectorAll(".previousPage").forEach(button=>button.addEventListener("click",changePage));
document.querySelectorAll(".nextPage").forEach(button=>button.addEventListener("click",changePage));

//Utilidades
function fillDiv(){
  const newPagePosts = paginate(posts,PAGE_SIZE,currentPage);
  postsDiv.innerHTML="";
  newPagePosts.forEach(post=>postsDiv.innerHTML+=`<h3>${post.title}</h3><p>${post.body}</p>`)
}

function changePage(event){
          if(event.target.className ==="previousPage" && currentPage > 1){
            currentPage--;
          }else if(event.target.className ==="nextPage" &&
           currentPage<posts.length/PAGE_SIZE)
           {
            currentPage++;
          }
          fillDiv();
}

function paginate(array, page_size, page_number) {
  
  return array.slice((page_number-1)*page_size,page_number*page_size)
};



fetch(POST_URL)
.then(response => response.json())
.then(data =>{
  posts=[...data];  
  fillDiv();
});

//Apartado 6.2 Login y paginación


const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL="https://reqres.in/api/users";

//Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
document.querySelector("#loginButton").addEventListener("click",login);
 const usersList=document.querySelector("#usersList");


 function login(event) {
  event.preventDefault();
  const userInfo={
    emal: emailInput.value,
    password:passwordInput.value
  }
  const config={
    method:"POST",
    headers:{"content-TYpe":"application/json"},
    body:JSON.stringify(userInfo)
  };
  fetch(LOGIN_URL,config)
  .then(response=>response.json())
  .then(data=>data.error? alert(data.error): fechtAllUsers())
}

 async function fechtAllUsers() {


  let response= await fetch(USERS_URL);
  let data= await response.json();

  let users=[];
  for (let page =1; page<=data.total_pages; page++){
    response = await fetch(`${USERS_URL}?Page=${page}`);
    let newData = await response.json();
    users = users.concat(newData.data)// users=[...users,...newData.data];
  }
  usersList.innerHTML="";
  users.forEach(user=> usersList.innerHTML+=`<li>${user.email}</li>`)
}


//Alternativa para recuperar todas las paginas de una API utilizando .then()
// let users=[];

// function fetchAllUsersV2(URL) {
//   fetch(URL)
//   .then(response=>response.json())
//   .then(newData=>{
//     users=users.concat(newData.data);
// if(newData.page<newData.total_pages){
//   fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`);
// } else{
//   usersList.innerHTML="";
//   users.forEach(user=> usersList.innerHTML+=`<li>${user.email}</li>`);
// }
// })
// };
