// Creamos la colección customers con algunas entradas. El carrito lo dejamos
db.customers.insertMany(
    [
        {
            name: "John",
            lastName: "Smith",
            address: "Calle Larios",
            email: "jsmith@gmail.com",
            phoneNumber: 654987321,
            shoppingCart: []
        },  
        {
            name: "Jane",
            lastName: "Donovan",
            address: "Calle Jorge Luis Borges",
            email: "jsmith12@gmail.com",
            phoneNumber: 554987321,
            shoppingCart: []
        },
        {
            name: "Peter",
            lastName: "Parker",
            address: "NY",
            email: "pparker@gmail.com",
            phoneNumber: 123456789,
            shoppingCart: []
        },
    ]
)

// Creamos la colección products con algunas entradas.
db.products.insertMany(
    [
        {
            name: "T-shirt",
            brand: "Adidas",
            category: "clothes",
            price: 15
        },
        {
            name: "Mobile",
            brand: "iPhone",
            category: "electronics",
            price: 1200
        },  
        {
            name: "Macarrones",
            brand: "Carrefour",
            category: "food",
            price: 1
        },  
    ]
);

// Para que sea más cómodo desde la shell, guardamos los productos en un array.
const products = db.products.find().toArray();

// Introducimos algunos productos en un par de clientes.
db.customers.update(
    {name: "John"},
    {
        $set: {shoppingCart: [products[0]._id, products[1]._id]}
    }
);


db.customers.update(
    {name: "Peter"},
    {
        $set: {shoppingCart: [products[2]._id]}
    }
);

// Para que sea más cómodo desde la shell, guardamos los clientes en un array.
const customers = db.customers.find().toArray();

// Creamos la colección de las facturas creando varias con los respectivos identificadores.
db.invoices.insertMany(
    [
        {
            customerId: customers[0]._id,
            productId: products[0]._id,
            date: new Date()
        },
        {
            customerId: customers[0]._id,
            productId: products[1]._id,
            date: new Date()
        },
        {
            customerId: customers[1]._id,
            productId: products[2]._id,
            date: new Date()
        },
    ]
);
