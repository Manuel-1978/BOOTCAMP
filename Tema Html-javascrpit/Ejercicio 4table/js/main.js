//constructor
function Book(titulo,autor,ventas,precios){
this.id=undefined;
this.titulo=titulo;
this.autor=autor;
this.ventas=ventas;
this.precios=precios; 


};
//data
let books=[
    new Book("Los cuatro jinetes del Apocalipsis", "Vicente Blasco Ibáñez", "741203", "22"),
    new Book("Tirano Banderas", "Ramón María del Valle-Inclán", "741204", "12"),
    new Book("Zalacaín el aventurero", "Pío Barojaz", "741205", "20"),
    new Book("Niebla", "Miguel de Unamuno", "741206", "14"),
    new Book("La colmena", "Camilo José Cela", "741207", "13"),
    new Book("Nada", "Carmen Laforet", "741208", "12"),
    new Book("Los santos inocentes", "Miguel Delibes", "741209", "21"),
    new Book("Las edades de Lulú", "Almudena Grandes", "741210", "11"),
    new Book("La casa de los espíritus", "Isabel Allende", "741211", "17"),
    new Book("Como agua para chocolate", "Laura Esquivel", "741212", "15")
];
//selectors
const listBook= document.querySelector("#listbook");
const addbook= document.querySelector("#addBook");
const eliminateBook= document.querySelector("#eliminateBook");


//Rellenar tabla

function openLibrary(){
    listBook.innerHTML = '';
 for(let index=0;index<books.length;index++){
        books[index].id=index+1;
    };

    for (const book of books){
    let createTable= document.createElement("tr");

    for (const key in book) {
      const value = book[key];
      const createRow =document.createElement("td");

      createRow.textContent=`${value}`;

      createTable.appendChild(createRow);

     
    };
    const neweliminateBook = document.createElement("td");
    neweliminateBook.innerHTML=`<button type="button" class="btn btn-danger" id ="eliminateBook">Eliminate</button>`
    createTable.appendChild(neweliminateBook);
    listBook.appendChild(createTable);
  };
  
};

openLibrary();


