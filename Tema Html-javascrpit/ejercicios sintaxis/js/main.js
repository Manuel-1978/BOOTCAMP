//1. Define e inicializa un array con 5 elementos string en una sola línea.
let clasesaldia=["lunes","martes","miercoles","jueves","viernes"];
console.log(clasesaldia,clasesaldia.length);

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
    