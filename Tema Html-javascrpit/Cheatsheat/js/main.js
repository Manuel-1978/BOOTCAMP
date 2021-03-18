//------------------------Uso de JS externo----------------
function saludo() {
    alert("Hola desde un script interno");
    console.log("has hecho click");
    }
    document.getElementsByTagName("a").item(1).addEventListener("click", saludo);
 //------------------Depuración / logging----------
//--alert("Mensaje");
console.log("");

//-----------------Variables------------------------
// var -> function scope
// let / const -> block scope

function saludar() {
    console.log("Incial: ", contador);
    //Comprobar con var y con let y ver diferencias
    for (var contador = 0; contador < 3; contador ++){
        console.log(contador);
    }
  console.log("Final: ", contador);
}

saludar();
console.clear();
//para limpiar lo anterior


//Inicializacion
let day;
day=5;
let month=10;

let hour,minute, second;

let array = [15,20,25];
console.log(array[0],array[1],array[2]);

let [var1,var2,var3] = [15,20,25];
console.log(var1,var2,var3);

//const -> block scope
const x = 1;
// x = 2; // Da error, no se puede reinicializar una constante

console.clear();
 //------------------tipos de datos-----------------------
 letstr=String("i'ma string");
 let str2="i'm another string"; //Recomendada
 console.log( typeof str2, typeof str, typeof"");


 let num = Number(5);
 let num2 = 5;
 console.log(typeof num, typeof num2, typeof 5,typeof 5.3, typeof "5");
 // let str = "string" ES IGUAL A "string"