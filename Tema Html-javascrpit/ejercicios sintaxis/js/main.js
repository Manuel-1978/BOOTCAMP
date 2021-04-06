//1. Define e inicializa un array con 5 elementos string en una sola línea.
let clasesAlDia=["lunes","martes","miercoles","jueves","viernes"];
console.log(clasesAlDia,clasesAlDia.length);

//2. Define un array inicialmente vacío. Añade tres elementos de
//tipo number posteriormente. Elimina por completo el primero y
// añade dos nuevos números al inicio. En cada paso, imprime la longitud 
// y el array entero por consola utilizando un string template 
// del tipo: `Longitud: ${}`.


let arrayvacio=[]
console.log(`el array  esta vacio ${arrayvacio},y la longitud es ${arrayvacio.length}`);

//Con push añadimos elementos nuevos
arrayvacio.push(2,3,4);
console.log(`el array  son ${arrayvacio},y la longitud es ${arrayvacio.length}`);
//con un shift elimino el primero
arrayvacio.shift();
console.log(`quitamos uno y quedan ${arrayvacio},y la longitud es ${arrayvacio.length}`);
//Con un unshift añado nuevos elementos al comienzo
arrayvacio.unshift(10,20);
console.log(`Añadimos dos mas y son ${arrayvacio},y la longitud es ${arrayvacio.length}`);

//3. Escribe una función nombrada que devuelva true si el argumento
// dado es de tipo boolean y false en caso contrario. 
function nombrada(valeu)
{
    return typeof valeu=== "boolean";
    }
 console.log(`la funcion es ${nombrada(true)}`);
 console.log(`la funcion es ${nombrada("true")}`);
 console.log(`la funcion es ${nombrada(2)}`);

 //4. Escribe una función que devuelva la longitud de un string 
 //recibido por argumento
 
 function areaRect(a,b) {
     return `El area del rectagulo es ${a*b}`    
 }
console.log(areaRect(4,4));

//5. Crea una función de flecha que reciba una cantidad de minutos y 
//lo devuelva convertido en segundos. 

const changeMin = (e)=> `Los segundos son ${e*60}`;

console.log(changeMin(5));

//6. Crea una función que reciba un número y devuelva el siguiente número par.
//(Si él es par, lo devolverá directamente).
function numeroPar(a)
{
    if (a % 2==0) { return `El numero es ${a} es Par` }
    else { return  a+1}
}
console.log(numeroPar(3));

//7. Crea una función que reciba una edad y devuelva la cantidad de días que 
//esa persona ha vivido. Puedes obviar los años bisiestos.

function diasVividos(a){return `El total de dias vividos son ${a*360} dias`};
console.log(diasVividos(43));
//8. Crea una función que reciba un array y devuelva su último
// elemento. Prueba tu función con varios arrays de diferentes
// longitudes


//9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy 
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas).
//Tu función recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. 

function countLegs(p,v,c) {
    return`El número de patas de pollo son ${p*2} patas.
     El número de patas de Vacas son ${v*4} patas.
     El número de patas de Cerdo son ${c*4} patas.`
};
    console.log(countLegs(100,30,20));

//10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo..
function equalDat(a,b) {
   if ( typeof a === typeof b){
       return `Los datos son del mismo tipo`
   } else {
       return `Son datos diferentes`
   }    
};
function equealDat (a,b) {
    let resultado = (typeof a === typeof b) ? "Los datos son del mismo tipo" : "Son datos diferentes";

    return resultado;
}
console.log(equalDat(5,4));
console.log(equalDat(4,"paco"));

//11. Crea una función que reciba un string con una frase y devuelva un array donde cada 
//elemento será una palabra de la frase original. Investigar método existente de los strings 
//para este fin.
function splitSentence(s) {
    return s.split(" ")    
};
console.log(splitSentence("Me llamo Manuel"));

//12. Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad,
// municipio, código postal, calle, número, planta, y número de puerta.

let address1={
    provincia: "Malaga",
    ciudad: "Malaga",
    municipio:"Malaga",
    código_postal:29004,
    calle  : "Avnd. Comandante Garcia Morato",
    número:"S/N",
    planta:"",
    número_puerta: "S/N"
};
let address2={
    provincia:"Granada",
    ciudad:"Granada",
    municipio:"Granada",
    código_postal:18005,
    calle:"San Jose Baja",
    número:"44",
    planta:"3",
    número_puerta:"A"
};
console.log(address1);
console.log(address2);

//13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy)
// y de un TLD (top-level domain) como, por ejemplo .com / .es / .org, etc. Crea una 
//función que se llame parseDomain() que reciba por argumento un string y devuelva un 
//objeto con dos propiedades: domain y tld. 


const parseDomain = function (x) {
    const array = x.split(".");
    const object = {
    Domain: array[0],
    TLD: array[1]
    }
    return object;
    }

//14. Nos han prohibido el uso del operador de igualdad estricta (===), 
//pero queremos poder seguir utilizando dicha esa funcionalidad. Crea una función qu
//e devuelva true si dos números tienen el mismo valor y el 
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu 
//función con dos estos inputs:
const strictEquality = (a,b)=>( a==b)  && (typeof a == typeof b);

console.log(strictEquality(5,2));
console.log(strictEquality(4,"paco"));

//15. Crea una función que reciba dos strings y devuelva true si tienen la misma
//longitud y false en caso contrario.
 

//function stringsLeght(tr1,tr2) {
  //  if(tr1.length ===tr2.length ){return true}
  //  else{return false}    
//}
const stringsLeght = (tr1,tr2)=> tr1.length ===tr2.length;
console.log(stringsLeght("paco","paco"));
console.log(stringsLeght("paco","Manolo"));

//16. Crea una función que reciba un string y determine si está vacío sin 
//utilizar la propiedad length

function whosIsThere(e) {
if(e == "")  {return `Esta vacio ${e}`}
else{return`Este string dice ${e}`}    
}
console.log(whosIsThere(""));
console.log(whosIsThere("yo"));

//17. Imprimir elemento a elemento el array del apartado 1 
//de cuatro formas diferentes: 

//• for
for(let i=0;i <=4;i++){
    console.log(`Indice con For: ${clasesAlDia[i]}`);
  }
//• forEach.
  clasesAlDia.forEach (function(valeu,index) {
    console.log(`Indice con forEach: ${index}:${valeu}`);    
 });
 //• for of
 for(let item of clasesAlDia){
    console.log(`indice forOf: ${item}`);
 }
 //• while
  while(true){
    console.log(`Indice while: ${clasesAlDia}`);
    clasesAlDia++;
    break;
  }
  
//18. Crea una función que reciba un string y un número N y devuelva el string 
//original repetido N veces.

let cadena = "NA "; 
let cadenaRepetida = cadena.repeat(15); 
let cancion = cadenaRepetida + "Batman!";
console.log(cancion);

//19. Crea una función que recibe un objeto con dos campos, votos positivos
// y votos negativos y que devuelva la cuenta final.

//function sumarVote(n1, n2) {
   // return (parseInt(n1) + parseInt(n2));}
    //console.log(`La suma de votos es:${sumarVote(5,-8)}`);
//const getVoteCount = function (obj){
   // return obj,upVotes - obj.downVotes;};
   //  const votes = //{upVotes: 35,downVotes:15};
   //  console.log(getVoteCount(votes));
   //  console.log(getVoteCount({upVotes:35,downVotes:15}));

//20. Crea una función que recibe un array de tipos de datos mezclados y 
//que devuelva otro array con el tipo de cada uno de los elementos.

mixArray=(a,b) =>`${typeof a} y ${typeof b}`
console.log(mixArray(5,"green"));

//21. Función que dado un array de números con formato string devuelva un 
//array con los números ya parseados. 

let araParsing=["1.5", "10", "0"];
console.log(araParsing);
araParsing = araParsing.map(Number);
console.log( araParsing);

//22. Crea una función de flecha que devuelva “Positivo” si el número que recibe 
//por argumento es mayor o igual que cero y “Negativo” en caso contrario. Usa el
// operador ternario.

let i= 2;
resultadoPolarizado = (i=0 | i>0) ? console.log(`El resultado es positivo`) : console.log(`El resultado es negativo`);

let i2=-2;
resultadoPolarizado = (i2=0 | i2>0) ? console.log(`El resultado es positivo`) : console.log(`El resultado es negativo`);

//23. Crea una función que dado un array cualquiera y un índice, borre el 
//elemento guardado en ese índice.

let array23 =[2];
array23.forEach ((valeu,index) => console.log(`Indice ${index}:${valeu}`));
array23.forEach(item=> array23.shift(item));
console.log(array23);

//24. Usando la función del apartado anterior, crea otra función que dado un array
// de números y un número a filtrar, devuelva un array borrando todos las apariciones
// de dicho número.
let array24 = [2,4,5];

let newarray24 = array24.filter(item =>{
      return item > 2}); 

console.log(`el array inicial es: `, array24);
console.log(`el nuevo array inicial es: `,newarray24);
;

//25. Crea dos funciones que recibirán un objeto, la primera devolverá un array con 
//los nombres de todas sus propiedades. La segunda devolverá un array con los valores
// de dichas propiedades.
//Investigar los métodos keys y values del prototipo de Object.
const obrero ={
    Caracteristica: "persona",
    tamaño: 30,
    Utilidad: "generar riqueza",
};
function propiedadeskeys (objeto){return Object.keys(objeto)};
function propiedadesvalues (objeto){return Object.values(objeto)};
function propiedadeskeys (objeto){return Object.entries(objeto)};
   console.log(propiedadeskeys(obrero));
   console.log(propiedadeskeys(obrero));
   
//26. Crea una función que invierta un string.
   function fraRev(fra) {
       let myfrass =" ";
       for( let i= fra.length-1;i>=0;i--){
     myfrass+=fra.charAt(i);
       }
        return myfrass;
   }
   function stringInvertido(texto){
       return texto.split("").reverse().join("");
   }
console.log(fraRev("Esto es una prueba"));
console.log(stringInvertido("Esto es una prueba"));
   //27. Crea una función que compare strings sin tener en cuenta 
   //las mayúsculas / minúsculas.
    function compare ( string_1 , string_2) {
       // string_1 = "";
       // string_2 = "";
      return  string_1.toLowerCase() == string_2.toLowerCase();

    // if (string_1 == string_2) { return `Son iguales`}               
    // else{ return`Son diferentes`}
    };

console.log(compare("HOLA","Hola"));
console.log(compare("Martin","Fermin"));

   //28. Crea una función que convierta en mayúscula sólo la primera letra de
   //cada palabra de un string dado. El apartado 11 será de ayuda.
   // Investigar cómo unir un array de strings en un único string.


const vamosParriva ="sin mi no hay un mañana";
 const arr1 = vamosParriva.split('');
const primeraLetra = arr1.map(function(arr1) {
    return arr1;
    
})
arr1.shift(0);
arr1.unshift("S");
arr1.slice();

console.log(arr1.join(""));


  // 29. Crea una función en una única línea que reciba un valor lógico y 
  //devuelva el opuesto.
const negacion =(logical) => !logical;
console.log(negacion(true));
console.log(negacion(false));