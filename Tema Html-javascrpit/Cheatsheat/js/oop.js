console.clear();

//Antes de ES6
function Car(brand,model,year) {
    this.brand=brand;
    this.model=model;
    this.year=year;
    this.getAge=function () {
        let age= new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
        
    }
    
}
let myCar = new Car("Ford","Mustang",1990);
let myCar2 = new Car("Audi","Q7",2015);

myCar.getAge();

console.log(myCar,myCar2);

Car.getHP=function () { // No actualiza las instancias
    console.log("This car has 300 horsepower");
    
}
//myCar.getHP=function () { //Solo modifica la instancia myCar
    console.log("This car has 300 horsepower");
    


Car.prototype.getHP = function() {
    console.log("This car has 400 horsepower");
}
myCar.getHP();
myCar2.getHP();

function SUV(brand,model,year,width,height) {
   Car.call(this,brand,model,year);
    this.width =width;
    this.height=height;    
}

SUV.prototype= Object(Car.prototype);

let mySUV = new SUV("Audi","Q3",2017,2200,2000);
console.log(mySUV);
mySUV.getAge();
mySUV.getHP();
//----------------------------ES6--------------------

class Book {
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSumary(){
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }
    getTYpe(){
        console.log("I'm a normal Book");
    }
}
const book1= new Book("MetaNorphosis","Franz Kafka",1915);
console.log(book1);
book1.getTYpe();
book1.getSumary();

// SubClasses (Herencia)

class Magazine extends Book{
constructor(title,author,year,month){
    super(title,author,year);
this.month=month;

}

    getTYpe(){
        console.log("I'm a magazine");
    }
}
//Instancias una revista
const mag1= new Magazine("Super Pop","Algun Loco",2015);
mag1.getSumary();
book1.getTYpe();
mag1.getTYpe();
//Otro ejemplo de polimorfismo

class Animal{
    constructor(type,name,sound){
        this.type=type;
        this.name=name;
        this.sound=sound;
    }
    makeSound(){
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }
    static compareAnimals(animal1,animal2){
        return animal1.type===animal2.type;
    }
}

class Cat extends Animal{
    constructor(name){
super("cat",name,"miau")
    }
}
class Dog extends Animal{
    constructor(name){
super("dog",name,"woof")
    }
}
const conBotas= new Cat("Con Botas");
const dylan = new Dog("Dylan");
const danko= new Dog("Danko");
 console.clear();
 conBotas.makeSound();
 dylan.makeSound();
 danko.makeSound();

 console.log(Animal.compareAnimals(dylan,danko));