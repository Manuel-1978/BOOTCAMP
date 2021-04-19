/*1. Generar un array de 100 objetos que tengan las siguientes propiedades:
• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
• Salario: un número aleatorio entre 1250 y 4000.*/
//const objeArray=[];

//for(let i =1;i<=100;i++){
    //objeArray.push(i);
//}
//function A100obj(employeNumber) {
   // this.cargo=`Empleado ${employeNumber}`;
//     this.rendimiento=Math.random();
//     this.salario=Math.floor(2750*Math.random())+1250;
//    }
  
//    let empleados = objeArray.map((employeNumber)=> new A100obj(employeNumber));
//    console.log(empleados);

let employees =[];
for(let i=1;i<=100;i++){
    const newEmployee={
        cargo:`Empleado ${i}`,
        rendimiento:Number(Math.random().toFixed(2)),
        salario: Math.floor(Math.random()*(4000-1250)+1250)
    };
    employees.push(newEmployee);
};
console.log("1.Generacion del array",employees);

//APARTADO 1 CON CONSTRUCTOR
// function Employee(cargo, rendimiento, salario){
//     this.cargo = cargo;
//     this.rendimiento = rendimiento;
//     this.salario = salario;
// }
// for (let i = 1; i <= 100; i++){
//     employees.push(new Employee(
//         `Empleado${i}`,
//         Number(Math.random().toFixed(2)),
//         parseInt(Math.random()* (4000 - 1250) + 1250)));
// };

 
// 2. Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback
employees.sort(function (emp1,emp2){ return emp1.rendimiento-emp2.rendimiento});

//3. Ordenar el array por salario e imprimirlo. Usar una función de flecha.
employees.sort((emp1,emp2) => emp1.salario-emp2.salario);
console.log("3-Ordenado por rendimiento",employees);

//4 Ordenar el array por el número de empleado de forma decreciente.
//El número de empleado sólo estará dentro del string Cargo. 
//Usar una función nombrada como callback.

function ordenarDecreciente(emp1,emp2) {
     //return emp1.cargo.slice(9)-emp2.cargo.slice(9);
     //return emp2.cargo.split(" ")[1]-emp1.cargo.split(" ")[1];
     return emp2.cargo.replace("Empleado","")- emp1.cargo.replace("Empleado","");

   
};

employees.sort(ordenarDecreciente);

console.log("Apartado4 -Ordenadr por numero de cargo",employees);

//5. Usando filter: imprimir el cargo y 
//salario de los que cobren más de 2500€.
console.log("5.filtrar e imprimir ciertos campos");

employees
.filter(employee => employee.salario>2500)
.forEach(employee=> console.log(employee.cargo,employee.salario));
// 6. Usando map: subir el sueldo un 25% a los que cobren menos de
//  1500€ y volver a hacer el punto 5.
employees=employees.map(employee=>{
    if(employee.salario<1500){
        employee.salario=employee.salario*1.25;              
    }   
        return employee;
 
});
console.log(employees);

// 7. Usando reduce: Obtener el coste total de todos los sueldos
//  para la empresa teniendo en cuenta que a la empresa le cuesta 
//  tener un empleado su sueldo más un 15% por impuestos. 
const totalCost = employees.reduce((salarySum,employee)=> salarySum + employee.salario*1.15,0);
console.log(totalCost);



// 8. Usar el método o métodos (reduce / map / filter / sort) que 
// determinemos oportuno e imprimir en cada apartado:
// • Despedir a los que tengan un rendimiento menor a 0.3.
// • Calcular el sueldo medio de la empresa.
// • Subir el sueldo de los que tengan un rendimiento superior a 0.7
employees=employees.filter(employee=>employee.rendimiento>=0.3);
console.log("8.1:Despedir a los que tengan un rendimiento menor a 0.3",employees);

let averageSalary = employees.reduce((salarySum,employee)=> salarySum + employee.salario,0)/employees.length;
averageSalary = averageSalary.toFixed(2);
console.log("8.2:calcular el sueldo medio de la empresa",averageSalary);

// employees=employees.map(employee=>{
//     if(employee.rendimiento>0.7){
//         employee.salario = employee.salario * 1.25;              
//     }   
//         return employee;
 
// });
employees.forEach(employee=>{
    
        if(employee.rendimiento>0.7){
            employee.salario=employee.salario*1.25; 
            console.log("Subido el sueldo de ",employee.cargo);

        }   
        
     
 
})
console.log("8.3:Subir el sueldo de los que tengan un rendimiento superior a 0.7",employees);
