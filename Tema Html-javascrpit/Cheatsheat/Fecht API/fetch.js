 const URL = "https://jsonplaceholder.typicode.com/users";

// const printNames = array => array.forEach(user => console.log(user.name));
// const printCities = array => array.forEach(user => console.log(user.address.city));
// const printLats = array => array.forEach(user => console.log(user.address.geo.lat));

// fetch(URL)
//    .then(response =>{
//       console.log(response);
//       if(response.ok){
//        return response.json();
//       }
//       throw Error ("Hay algún problemas con la respuesta: "+ response.statusText)
//     })
//     .then(data => {
//     printNames(data);
//     printCities(data);
//     printLats(data);
//     })
// .catch(error=>console.log(error));

//Async-await-Alternativa a then

async function requestURL(URL) {

    console.log(2);
    const response=await fetch(URL);
    const data= await response.json();
    console.log(4);
}
console.log(1);
requestURL(URL);
console.log(3);
 
// Peticion con metodo Http Post en lugar de GET

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const newPost = {
    title:"Que guapo soy",
    body:"Lo se, soy irresistible"
};

const http= {
method:"POST",
hearders:{
    "Content-Type":"application/json"
},
body: JSON.stringify(newPost)
};
fetch(POST_URL,http)
.then(response=>response.json())
.then(data=> console.log(data))