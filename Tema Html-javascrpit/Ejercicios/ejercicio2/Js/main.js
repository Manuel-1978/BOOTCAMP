//2.Al pulsar un botón, cambiar el color del fondo del 
//cuerpo de HTML
const colorButton = document.getElementsByTagName("body")[0];
colorButton.addEventListener("click",function (event) {
   colorButton.style.backgroundColor="red";
    }
        );
   
        //solucion alternativa con arrow function
        colorButton.addEventListener("click",()=>document.body.style.backgroundColor="red");
        