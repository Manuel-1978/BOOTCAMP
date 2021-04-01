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
arrayvacio.push("Paco","Fran","Helena");
console.log(`el array  son ${arrayvacio},y la longitud es ${arrayvacio.length}`);
//con un shift elimino el primero
arrayvacio.shift();
console.log(`quitamos uno y son ${arrayvacio},y la longitud es ${arrayvacio.length}`);
//Con un unshift añado nuevos elementos al comienzo
arrayvacio.unshift("Alejandro","Sonia");
console.log(`Añadimos dos mas y son ${arrayvacio},y la longitud es ${arrayvacio.length}`);

//3. Escribe una función nombrada que devuelva true si el argumento
// dado es de tipo boolean y false en caso contrario. 
function nombrada()
{
    if (nombrada = Boolean) {return true;} else  {return false;}
    }
 console.log(`la funcion es ${nombrada(5)}`);
 console.log(`la funcion es ${nombrada()}`);

 //4. Escribe una función que devuelva la longitud de un string recibido por argumento
 
 function areaRect(a,b) {
     return `El area del rectagulo es ${a*b}`    
 }
console.log(areaRect(4,4));

//5. Crea una función de flecha que reciba una cantidad de minutos y 
//lo devuelva convertido en segundos. 

let changeMin = (e)=>{
    return `Los segundos son ${e*60}`
}
console.log(changeMin(5));

//6. Crea una función que reciba un número y devuelva el siguiente número par.
//(Si él es par, lo devolverá directamente).
function numeroPar(a)
{
    if (a % 2==0) { return `El numero es ${a} es Par` }
    else{ return `El numero ${a} es Impar`}
}
console.log(numeroPar(3));

//7. Crea una función que reciba una edad y devuelva la cantidad de días que 
//esa persona ha vivido. Puedes obviar los años bisiestos.

function diasVividos(a){return `El total de dias vividos son ${a*360} dias`};
console.log(diasVividos(43));

//9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy 
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas).
//Tu función recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. 

function countlegs(p,v,c) {
    return`El número de patas de pollo son ${p*2} patas. El número de patas de Vacas son ${v*4} patas.El número de patas de Cerdo son ${c*4} patas.`
};
    console.log(countlegs(100,30,20));

//10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo..
function equalDat(a,b) {
    if ( typeof a ==typeof b){
        return `Los datos son del mismo tipo`
    } else {
        return `Son datos diferentes`
    }    
};
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

let parseDomain ="domain,tld";
let arra_y = parseDomain.split(",");


console.log(arra_y);

//14. Nos han prohibido el uso del operador de igualdad estricta (===), 
//pero queremos poder seguir utilizando dicha esa funcionalidad. Crea una función qu
//e devuelva true si dos números tienen el mismo valor y el 
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu 
//función con dos estos inputs:
function strictEquality(a,b) {
    if ( a=b  && typeof a == typeof b){return true} 
    else {return false}    
};
console.log(strictEquality(5,2));
console.log(strictEquality(4,"paco"));

//15. Crea una función que reciba dos strings y devuelva true si tienen la misma
//longitud y false en caso contrario.
 

function stringsLeght(tr1,tr2) {
    if(tr1.length ===tr2.length ){return true}
    else{return false}    
}
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
let cadenaRepetida = cadena.repeat(20); 
let cancion = cadenaRepetida + "Batman!";
console.log(cancion);

//19. Crea una función que recibe un objeto con dos campos, votos positivos
// y votos negativos y que devuelva la cuenta final.

function sumarVote(n1, n2) {
    return (parseInt(n1) + parseInt(n2));}
    console.log(`La suma de votos es:${sumarVote(5,-8)}`);

           
//20. Crea una función que recibe un array de tipos de datos mezclados y 
//que devuelva otro array con el tipo de cada uno de los elementos.

mixArray=(a,b) =>`${typeof a} y ${typeof b}`
console.log(mixArray(5,"green"));

//21. Función que dado un array de números con formato string devuelva un 
//array con los números ya parseados.


  let numberString= Number("1","2","3","4","5");

    console.log(`Los numeros son ${numberString}`); 
