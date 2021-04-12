//------------------------Uso de JS externo----------------
function saludo() {
    alert("Hola desde un script interno");
    console.log("has hecho click");
    }
   //n document.getElementsByTagName("a").item(1).addEventListener("click", saludo);
 //------------------Depuración / logging----------
//--alert("Mensaje");
console.log("");

//-----------------VARIABLES------------------------
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
 //------------------TIPOS DE DATOS -----------------------
 // Datos primitivos
 letstr=String("i'ma string");
 let str2="i'm another string"; //Recomendada
 console.log( typeof str2, typeof str, typeof"");


 let num = Number(5);
 let num2 = 5;
 console.log(typeof num, typeof num2, typeof 5,typeof 5.3, typeof "5");
 // let str = "string" ES IGUAL A "string"


 // numeros booleanos
 let bool = Boolean( true);
 let bool2= false;
 console.log (typeof bool, typeof bool2, typeof true, typeof "true");

 //valor de indefinidos
let undef;
console.log(undef,typeof undef);

let selectedColor = null; //Limpiar una variable o para reinicializarla 
console.log(selectedColor, typeof selectedColor);

// Objects
array = Array(1,2,3); //le quitamos el let por que lo habiamos definido antes
let array2 = [1,2,3];
console.log(array,array2);
console.log(typeof array,typeof array2);

console.log(typeof new Date("2021-03-12"));
console.log(typeof new Error("Mensaje de error"));

//----------------------string------------------------
str= "Hola futuro";
console.log(str,str.length);
console.log(str.indexOf("futuro",str.indexOf("cadena que no existe"))); //Para buscar en que posicion se encuentra el objeto
console.log("La última ocurrencia de 'u' esta en el índice",str.lastIndexOf("u"));

console.log(str.substring(1,3));

console.log("Hola Mundo".concat(". Adiós mundo."));
console.log("Hola Mundo" + ". Adios mundo"); //Equivalente a concat es el +
str = str + " Adiós Mundo.";
str+= ". Adiós Mundo.";
console.log(str);


console.log(str.replaceAll("Mundo", "futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El dia del cumpleaños de mi mujer es ${day}`); //String template
console.log("El dia de mi cumpleaños es",day,"." );

//Parasing-parseo(es la conversion de un objeto a o otro)
let number = Number("algo"); //NaN = Not a Number.No se genera error.
console.log(number,typeof number);


number = Number("1000");
console.log(number,typeof number);
 
number += "1000"; // Entiende que es una concatenación, no una suma.
console.log(number, typeof number);

console.log("1"+1, "1"-1);
 
//------------------------objects---------------------

let person = {//Curly Brackets
  name: "John",
  age: 30,
  blonde: true,
  walk: function(){
    console.log("Hey estoy andando");
  },
  jump(){
    console.log("Hey, estoy saltando.");
    
  },//Pre-ES6
  presentarse(){
    console.log(`Me llamo ${this.name},tengo ${this.age}y ${this.blonde ? "Soy rubia": "soy morenaza"}`);
  }
  
}
person.presentarse();
//Acceso por punto/ Dot natation
console.log(typeof person,person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name="Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

//Acceso por corchetes/ Brackets notation
let propertyName;
console.log(person[propertyName]);

//Ampliación

person.children= ["Martha","Peter"];
console.log(person);
console.log(person.children[0], person.children[1]);

person.walk();
person.jump();

//this
const person2={
  name:"Thomas",
  talk(){
    console.log(this);
console.log(`Me llamo ${this.name}`);
  }
}

const person3={
  name:"Sarah",
  talk(){
    console.log(this);
console.log(`Me llamo ${this.name}`);
  }
}

person2.talk();
person3.talk();
person2.talk(this);

console.clear();
//How to copy an object
let obj1 = {property: 5};
let obj2 = obj1; // NO es una copia. Es el mismo objeto con dos nombres.

obj2 = {...obj1}; // Copia superficial que usaremos prácticamente siempre.
obj2 = JSON.parse(JSON.stringify(obj1)); // Copia profunda o total.

// Object Constructor using functions
function Car(brand,color,weight,toSpeed) {
  this.brand = brand;
  this.color = color;
  this.weight = weight;
  this.toSpeed = toSpeed;
  this.getDescrption = function () {
    return `This ${this.color} ${this.brand} weights ${this.weight}`+
    ` kilos and can reach up to ${this.toSpeed} km/h.`;
    
  }
}
const car1 = new Car("Mercedes","red",undefined,200);
const car2 = new Car("Volvo","white",2500,180);
const car3 = new Car("wolkswagen","red",1500,175);

console.log(car1,car2,car3);

console.log(car2.weight);
console.log(car3.getDescrption());



//---------------------Arrays------------------------
let selectedColors=["red","blue"]; //Array de stirngs
console.log(selectedColors,selectedColors.length, typeof selectedColors);

selectedColors[2] = "green";
console.log(selectedColors,selectedColors.length);
//----aqui añadimos un nuevo elemento a la array con push
selectedColors.push("violet","white");
console.log(selectedColors,selectedColors.length);
//----con pop quita el ultimo elemento
selectedColors.pop();
console.log(selectedColors,selectedColors.length);
//----mete un nuevo elemento en el comienzo del array
selectedColors.unshift("white");
console.log(selectedColors,selectedColors.length);
//--igual que el pop pero por el inicio
selectedColors.shift();
console.log(selectedColors,selectedColors.length);
//me ordena de manera alfabetico o por objetos 
selectedColors.sort();
console.log(selectedColors,selectedColors.length);
//--te imprime el orden de donde este posicionado el elemento
console.log(selectedColors.indexOf("red"));

console.log("El rojo esta en el indice",selectedColors.indexOf("red"));
//-----te muestra el comienzo del el final
console.log(selectedColors.slice(1,3));
console.log(selectedColors);
//---te muestra los elementos borrados y tu array se modifica 
console.log("Los elementos borrados son: ",selectedColors.splice(1,2));
console.log("El array se ha quedado asi: ",selectedColors);
/*Ejercicio
Crear un objeto 'niño' que tenga las propiedades: nombre,altura,genero y amigos. 
Amigos estara inicialmente vacio y añadiremos posteriormente tres elementos con los
nombres de cada amigo.Despues, añadiremos uno extra al inicio.
*/
let child ={
  name: "Paco",
  height: 1.58, 
  gender:"male",
  friends:["Pedro"],
  loseFriend(){
    this.friends.pop()
  }
}
child.friends.push("Maria","Josua","Manuel");//añadir push
console.log(child.friends);

child.friends.unshift("Gustavo Adolfo");//añadir nuevo elemento al comienzo
console.log(child.friends);

child.loseFriend();
console.log(child);
 
//-------------------------Condicionales--------------------
const randomNumber=9;
const gessedNumber = "5";
if(typeof randomNumber !== typeof gessedNumber){
  console.log("Hey, tienes que introducir el mismo tipo.");
} 

//if(randomNumber===gessedNumber){
//console.log("Has acertado el número");
//} else if (randomNumber > gessedNumber){
 // console.log("El nuemro secreto es mayor");

//} else{
//console.log("El numero secreti es menor");
//}

//Ternary operator

let variable = 12 < 10 ? " el  primero es menor" : "el primero es mayor";
console.log(variable);

// Switch
let option = 3;
switch(option){
  case 1:
    //Bloque de codigo para valor 1
    console.log("Option vale 1");
    break;
  case 2:
    //Bloque de codigo para valor 2
    console.log("Option vale 2");
    break;
    case 3:
   //Bloque de codigo para valor 3
    console.log("Option vale 3");
    break;
    default:// "De otro modo" de Pseint
    console.log("otra opcion");
    break;
}

//----------------------------Funciones/ Functions-----------------
//Nombradas
function greet(name,lastname){
  console.log(`Hola,${name} ${lastname}.¿Que tal?`);
  }

  greet();
  greet("Marcos","Aurelio");

// Que devuelva el cuadrado de un numero que recibe por parametro
function square(number){
    let square = number * number;
    return square;
}
console.log(square(5));



//Higher order Functions
//Map
let arr1= [1,2,3];
let arr2=[];
for(let num of arr1){
  arr2.push(num*2);
}
console.log(arr1,arr2);

let arr1= [1,2,3];

arr2=arr1.map(function (num){
  return num*2;
});
arr2 = arr1.map(num=>num*2);
// A partir de un array con años de nacimiento, calcular edades
const birthYears = [1980,1990,1975,1970];
  const ages= birthYears.map(year => 2021- year);

console.log(ages);

//Filter
const prices =[150,50,49,51,15,237];
const expensives= [];
for(let price of prices){
  if(price>=50){
    expensives.push(price);
  }  
};

console.log(expensives);

const prices =[150,50,49,51,15,237];
const expensives= prices.filter(price=>price>=50);
console.log(expensives);


const cars=[
  {
    brand:"BMW",
    year: 2010,
    plateNumber:"HGJ1282"
  },
  {
    brand:"Mercedes",
    year: 1990,
    plateNumber:"BXCJ1282"
  },
  {
    brand:"Volvo",
    year: 2021,
    plateNumber:"LKJ1293"
  }
];
console.log(cars.filter(car=>car.year>2008));

//cars=["BMW","Mercedes","Volvo"]
  
console.log(cars.map(car =>car.brand));

//sort
console.log(cars);
cars.sort((car1,car2)=> car1.year-car2.year);
console.log(cars);
//Reduce-----
const arr= [10,7,13,20];
console.log(arr.reduce((sum,currentNumber)=> sum +currentNumber,0));







// -------------Anonimas--------
let numbersArray =[5,51,1,15,2];
console.log(numbersArray);
numbersArray.sort();// Me lo ordena según ASCII
console.log(numbersArray);

/*

 */

function orderNumbers (a,b){
    if(a<b){
      return -1;
    } else if (a===b){
      return 0;
    } else{
      return 1;
    }
}


//numbersArray.sort(orderNumbers);

numbersArray.sort(function (a,b){return a- b});//funcion anonima
 console.log(typeof orderNumbers, typeof function (a,b){return a- b} );
console.log(numbersArray);

/* ----------------Funciones de flecha /Arrow Functions-----------*/
let perimeterOfSquare = function (side) { // Función anónima normal
  return side * 4;
  }
  perimeterOfSquare = function (side) {return side * 4;} // (opcional) Una única línea
  perimeterOfSquare = (side) => {return side * 4;} // Sustituyo function por la flecha después de params.
  perimeterOfSquare = (side) => side * 4; // Si sólo quiero devolver algo, quito llaves y return.
  perimeterOfSquare = side => side * 4; // Si sólo tiene 1 param, puedo quitar paréntesis.
  
  console.log(perimeterOfSquare(5));
 
  //Como transformar func anonima en funcion de flecha
  numbersArray.sort(function (a,b){return a- b})
  numbersArray.sort((a,b)=>a-b);

  let squareV2 = number=> number*number;
  console.log(squareV2(5));

  /*-------------Loops------------------*/
//For
  for(let i=0;i <=10;i++){
    console.log(`Indice: ${i}`);
  }
//Definir y rellenar un array con el indice i
const arrayFor = [];

for (let i = 0 ; i <= 10; i++) {
    arrayFor.push(i);
  }
  console.log(arrayFor);

  //while
  let contador= 0;
  while( contador<= 10){
    console.log(contador);
    contador++;
  }
 while(true){
   break;
}
console.log("No entra en bucle infinito");

//ForEach
 console.log(numbersArray);
numbersArray.forEach (function(valeu,index) {
   console.log(`Indice ${index}:${valeu}`);    
});

numbersArray.forEach ((valeu,index) => console.log(`Indice ${index}:${valeu}`));
//Copiar un array a otro vacio
let otherArray = [];
console.log(otherArray);//Cuidado con consola del navegador
numbersArray.forEach(item=> otherArray.push(item));
console.log(otherArray);
//For Of
for(let item of numbersArray){
  console.log(item);
}
//Continue
for(let i=0;i<5;i++)
{
  if(i===3){
    continue// Salta a la siguiente iteracion
  }
  console.log("Using continue",i);
}
//Break
let i=0;
let k=0;
mainLoop:while(true){
  console.log("Outer loop",i);
  i++;
  k=1;

  while(true) {
    console.log("Inner loop",k);
    k++;
    if (i===5 && k===5){
      break mainLoop;
    }else if (k ===5 ){
      break;
    }
  }
}

