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
const colorButton = document.querySelectorAll("button")[0];
colorButton.addEventListener("click", function (e) {
   colorButton.style.backgroundColor="red";
});
   
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
const ap4Paragraph=document.getElementById("fillableParagraph");
const ap4Input=document.querySelector("input");
const ap4Button=document.querySelectorAll("button")[1];

ap4Button.addEventListener("click",() =>{ 
    ap4Paragraph.textContent=ap4Input.value;
    ap4Input.value="";
});
//4.2
const ap42Paragraph = document.getElementById("fillAbleParagraph2");
const ap42Input=document.querySelectorAll("input")[1];

ap42Input.addEventListener("input",() => ap42Paragraph.textContent =ap42Input.value);

//5. De forma similar al anterior, pero para un textarea y validará 
//si lo introducido es mayor de 15 caracteres
const textarea = document.querySelector("#textareaToValidate");
textarea.addEventListener("input",e =>{
//if(e.target.value.lenght>15){
// e.target.style.color="red";
// } else{
//  e.target.style.color ="green"; // }
  e.target.style.color = e.target.value.lenght > 15 ? "red":"green";
});

//6. Añadir un input de tipo texto con leyenda: “Escribir un número par”.
//Añadir un botón. Al pulsar el botón nos validará si el número es par o
// no. En caso negativo, cambiar los bordes del input a rojo.
//Para revertir el estado de una propiedad, podemos utilizar el valor
//“revert” o dejarla vacío.
const eventInput = document.querySelector("#eventNumberInput");

eventInput.nextElementSibling.addEventListener("click",()=>{
   if(eventInput.value % 2 !== 0){
      eventInput.style.border="2px solid red"
  } else {
     eventInput.style.border ="revert"
 }});

//7. Partiendo de una lista ul, crear 10 li con un texto indicando el
// número del elemento (“Elemento X”) usando un bucle for.

const ul = document.getElementById("listToFill");

for (let i= 1;i<=10;i++){
   const newLi = document.createElement("li");
   newLi.textContent= `Elemento ${i}`;
   ul.appendChild(newLi);
};

//8. Crear un enlace y un botón. Si pulso el enlace se me abre la URL 
//en la misma página. Si pulso primero elbotón y luego el enlace, se me abre
// en una nueva pestaña

const newTabButton = document.getElementById("newTab");
const link = document.querySelector("a");

newTabButton.addEventListener("click",()=>link.target="_blank");

//9. Añadir un párrafo y un select con 5 opciones de colores: negro, 
//blanco, rojo, amarillo, verde y azul. Al seleccionar un color del select, 
//cambiar el color del párrafo.
 
const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change",e =>{
   ap9Paragraph.style.color= e.target.value;
});

//10. Incluir un botón que al pulsarlo genere un número aleatorio y
// mantenga en una lista actualiza el número de elementos que se han generado, 
//los que son pares y los que son impares
const currentRandom = document.getElementById("currentRandom");
const totalNumber = document.getElementById("totalNumbers");
const oddNumbers =document.getElementById("oddNumbers");
const evenNumbers =document.getElementById("evenNumbers");

document.getElementById("randomButton").onclick=()=>{
  const randomNumber = Math.floor(Math.random()*100);
  currentRandom.textContent = randomNumber;
  totalNumber.textContent++;//totalNumber.textContent= Number(totalNumber.textContent)+1;
randomNumber % 2===0 ? evenNumbers.textContent++ : oddNumbers.textContent++;

};
  
//function numAleatorios() {
//   let numAle= parseint(Math.random()*100);
//if (numAle %2==0){return }
//}

//11. Construir una lista que tenga números. Añadir un input donde poder
// añadir números y un botón. Al pulsar el botón, si el número ya existe 
//en la lista, mostrar un mensaje de error, si no existe, lo añadirá al 
//principio.
const ulApt11= document.getElementById("ulApt11");
const inputApt11 = document.getElementById("inputApt11");
const buttonApt1 = document.getElementById("buttonApt1");
let numbersList = [];

function fillNumber() {
   const num = inputApt11.value;
   if ( numbersList.includes(num)){
      alert("error");
   }else {
      const li = document.createElement('li');
      ulApt11.prepend(num);
      li.textContent = num;
      numbersList.push(num);
   }
   
   };

buttonApt1,addEventListener("click",fillNumber);



   

//12. Crearemos una clase .btn en CSS que le de ciertos estilos a un botón.
// Al hacer click en el botón haremos “toggle” o alternaremos esa clase, 
//es decir, si está presente la quitaremos y si no está, la añadiremos.

document.querySelector("#toggler").onclick =(e)=>e.target.classList.toggle("btn");


//Apartado Extra: Refactorizar.

let buttons = document.getElementsByClassName("btn-red");

Array.from(buttons).forEach( button=> button.onclick= e =>{ 

   e.target.style.backgroundColor="red";
});
// Solucion 2
buttons = document.querySelectorAll(".btn-red");
buttons.forEach( button=>
    button.addEventlistener ()= e =>{ 

   e.target.style.backgroundColor="red";
});