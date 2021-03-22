//------------------------Uso de JS externo----------------
function saludo() {
    alert("Hola desde un script interno");
    console.log("has hecho click");
    }
   //n document.getElementsByTagName("a").item(1).addEventListener("click", saludo);
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
 //------------------tipos de datos -----------------------
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

//Parasing-parseo(es la combersion de un objeto a o otro)
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
  blonde: false,
  walk: function(){
    console.log("Hey estoy andando");
  },
  jump(){
    console.log("Hey, estoy saltando.");
  }//Pre-ES6
}
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
//-----te muestra el comeinzo el el final
console.log(selectedColors.slice(1,3));
console.log(selectedColors);
//---te muestra los elementos borrados y tu array se modifica 
console.log("Los elementos borrados son: ",selectedColors.splice(1,2));
console.log("El array se ha quedado asi: ",selectedColors);
/*
Crear un objeto 'niño' que tenga las propiedades: nombre,altura,genero y amigos. 
Amigos estara inicialmente vacio y añadiremos posteriormente tres elementos con los
nombres de cada amigo.Despues, añadiremos uno extra al inicio.
*/
let child ={
  name: "Paco",
  height: 1.58, 
  gender:"male",
  friends:["Pedro"],
  lostfriend(){
    this.friends.pop()
  }
}
child.friends.push("Maria","Josua","Manuel");//añadir push
console.log(child.friends);

child.friends.unshift("Gustavo Adolfo");//añadir nuevo elemento al comienzo
console.log(child.friends);

child.lostfriend();
console.log(child);
