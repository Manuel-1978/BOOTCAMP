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

//Apartado 2.Al pulsar un botón, cambiar el color del fondo del 
//cuerpo de HTML
const colorButton = document.getElementsByTagName("body")[0];
colorButton.addEventListener("click",function (event) {
   colorButton.style.backgroundColor="red";});
   
    //solucion alternativa con arrow function
 //colorButton.addEventListener("click",()=>document.body.style.backgroundColor="red");
        
 //Apartado 3:Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img.
 // Al hacer click en cada URL, cambiará la imagen a la que contenga dicha URL.

const listItems= document.getElementsByTagName("li");
const image = document.querySelector("img");
const changeImage = (e)=> image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

//Apartado 4:Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse
// el texto del input en un párrafo.
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.

function mostrar_texto ()
{ 
   const parrafo = document.createElement("p");
   let newtext= document.createTextNode( document.getElementById("newtext").value);
 }
 parrafo.addEventListener("click", newtext);