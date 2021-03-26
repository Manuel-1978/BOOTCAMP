//Apartado 1- Partimos de un HTML con un div vacio.
//con JS,añadir dos elementos p con un texto dentro.
const div = document.getElementsByClassName("div")[0];
const p = document.createElement("p");
document.createElement("p");
p.textContent="Parrafo del ejercicio 1";
console.log(p);
//div.appendChild(p);
const p2= document.createElement("p");
p2.textContent="Segundo parrafo del ejercicio 1";
//div.appendChild(p2);
div.append(p,p2);