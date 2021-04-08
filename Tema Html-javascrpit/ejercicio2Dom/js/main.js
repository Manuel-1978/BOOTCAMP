
 function User(name, firstLastName,secondLastName,email, age, city,) {
    this.name = name;
  this.firstLastName = firstLastName;
  this.secondLastName = secondLastName;
  this.email = email; 
  this.age = age;
  this.city = city;
  this.productsCount = productsCount=0;
  this.incrementProducts = function () {
      this.productsCount++;
  }
  this.emptyProducts = function () {
    this.productsCount=0;
}
 }
//Data
let users = [
    new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 35, "Málaga"),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete"),
];
 //Selectors
 const select = document.querySelector("#userSelect");
 const list = document.querySelector("#userInfo");
 const incrementButton = document.querySelector("#incrementButton");
 const emtyButton = document.querySelector("#emptyButton");

//Rellenar Select conopciones
//for (let user of users) {    
   // const newOption= document.createElement("option");
   // newOption.textContent = user.name;
   // select.appendChild(newOption);
//}
users.forEach(user => {
    const newOption= document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
});
//Rellenas la lista con algun tipo de usuario
 function fillList (user){
     list.innerHTML= "";
     for (const propertyName in user) {
        const value = user[propertyName];
       
        if(typeof value !== "function"){
        
        const newListItem = document.createElement("li");
        newListItem.innerHTML=`<b>${propertyName}:</b>${value}`;
        newListItem.classList.add("list-group-item")
        list.appendChild(newListItem);
       // list.innerHTML += `<li class='list-group-item´><b>${propertyName} : <b> ${value}</li>`
        }
    };
 }

 //Estado inicial
 fillList(users[0]);
 function processProducts(e) {
     const selectedUser=users.find(user=>user.name=== select.value);
     e.target === incrementButton
         ? selectedUser.incrementProducts()
         : selectedUser.emptyProducts();
     
     fillList(selectedUser); 
 };
//Añadir Listeners
select.addEventListener("change", e =>{
const selectedUser = users.find(user => user.name === select.value);
fillList(selectedUser);
});

incrementButton.addEventListener("click",processProducts);
emtyButton.addEventListener("click",processProducts);