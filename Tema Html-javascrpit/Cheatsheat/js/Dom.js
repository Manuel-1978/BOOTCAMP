//----------------DOM(Document Object Model)------
//Basics
//console.log(document); para comprobar quie esta enlazado
console.log(document.domain);
console.log(document.URL);
console.log(document.title); 
//podemos cambiar el nombre
document.title += " (DOM)";

//Selectors-------------------------------------------------- 

const family = document.getElementsByTagName("div");
console.log(family);
//selector por ID-------------------
const grandParent = document.getElementById("grandparent");
console.log(grandParent);
//selector por ethiqueta HTML-------------------
const parents = document.getElementsByClassName("parent"); //HTMLCollection
const parent1=parents[0];
const parent2= parents[1];
console.log (parent1,parent2);
//selecion por clase------------------
const children = document.getElementsByClassName("child");
console.log(children);
//selecion un selector completo(query)------------
let element = document.querySelector(".grandparent div");

parent1.style.backgroundColor = "#333";

const changeBackground = (element, color) => element.style.backgroundColor = color;


//children[0].parentNode.style.backgroundColor = "#333";

//changeBackground(children[0]), "#333";
//changeBackground(parent1,"red");
//changeBackground(parent2.children[1],"blue");
//changeBackground(children[1].parentNode.parentNode, "#ddd");

//changeBackground(parent1.children[1].previousElementSibling, "red");
 
//Propiedades /Properties---------------------------------

//children[0].innerHTML = "Child 1 v2";
 console.log(children[0].innerHTML);//imprime las etiquetas   
 console.log(children[0].textContent);//ignora las etiquetas
 console.clear();

 console.log("classlist: ", parent1.classList);
 parent1.classList.remove("bg-dark");
 parent1.classList.add("bg-red");
 console.log("Classlist: ",parent1.classList);
//parent1.className = "d-fle" Acciona sobre todos las class
 parent1.classList.toggle("bg-red");
 //toggle: Alterna la clase, si no esta, la incluye,si esta, la elimina.

 parent1.setAttribute("name","nombre-del-parent-1");//cambia atributos
console.clear();
 //Create/ Remove elements
  let myDiv = document.createElement("div");
  myDiv.id="new-div";
  myDiv.classList.add("child");
  myDiv.textContent= "child 2.5";
 
  let myDiv2 = myDiv;
parent2.appendChild(myDiv2);
parent1.appendChild(myDiv); // MISMO nodo con dos nombres
 
myDiv2 = myDiv.cloneNode(true);//creamos un nuevo nodo apartir del original
parent2.appendChild(myDiv2);
myDiv2.textContent ="child 5";

//eliminar un nodo
myDiv.remove();

let myDiv3 = myDiv.cloneNode();

parent2.before(myDiv3);

parent2.after(myDiv.cloneNode(true));

//Crear una fúncion que me devuelva un nodo nuevo y que reciba etiqueta e ID

function createNode(label,id) {
  let newNode = document.createElement(label);
  newNode.id = id;
  return newNode;  
  }

  let newDiv= createNode("div","identificador1");

  let table= createNode("div","identificador2");

  parent2.appendChild(newDiv);
  parent2.appendChild(table);
   //Events / Eventos

const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click",function (event) {
  console.log(event);
  console.log(event.target);
 
  console.log(event.target.tagName);

  if (event.ctrlKey){
    document.body.classList.toggle("bg-red");
  }
  console.log(`X: ${event.clientX}| Y: ${event.clientY}`);
  console.log(`Alt: ${event.altKey}. shift: ${event.shiftKey}.Ctrl: ${event.ctrlKey}`);
});
   

const emailInput = document.querySelector("#emailInput");
emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener(e) {
  console.log("Tipo de evento: ",e.type);
  //if (e.type==="focus"){
  // e.target.classList.add("bg-red");

  // } else if (e.type==="blur"){
  //  e.target.classList.remove("bg-red");
 // }
}
const changeTitle = e =>{
  document.querySelectorAll("h1")[2].textContent= emailInput.value;//Propiedad value importante
}
emailInput.addEventListener("keydown",inputListener);
emailInput.addEventListener("keyup",changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

function Coords(e) {
  const h1= document.querySelectorAll("h1")[3];
  h1.textContent=`X: ${e.clientX}| Y: ${e.clientY}`;

}
document.body.addEventListener("mousemove", Coords);




























//Array.from(family).forEach(item=> console.log(item);)//contruyo un array des
//for (let familyMember of family){
  //  console.log(familyMember);
//}