//----------------DOM(Document Object Model)------
//Basics
//console.log(document); para comprobar quie esta enlazado
console.log(document.domain);
console.log(document.URL);
console.log(document.title); 
//podemos cambiar el nombre
document.title += " (DOM)";

//Selectors

const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent"); //HTMLCollection
const parent1=parents[0];
const parent2= parents[1];
console.log (parent1,parent2);

const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelectorAll(".grandparent div");


parent1.style.backgroundColor = "#333"









//Array.from(family).forEach(item=> console.log(item);)//contruyo un array des
//for (let familyMember of family){
  //  console.log(familyMember);
//}