/*1. Generar un array de 100 objetos que tengan las siguientes propiedades:
• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
• Salario: un número aleatorio entre 1250 y 4000.*/
const objeArray=[];
function A100obj(employeNumber) {
    this.cargo=`Empleado ${employeNumber}`;
    this.rendimiento=Math.random();
    this.salario=Math.floor(2750*Math.random())+1250;
   }
for(let i =0;i<100;i++){
    objeArray.push(i);
}

let employees = objeArray.map((employeNumber)=> new A100obj(employeNumber));
 console.log(employees);