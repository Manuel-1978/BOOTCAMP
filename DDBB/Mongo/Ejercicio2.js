use chat

// Crear una colección para usuarios con la siguiente estructura: username, email, password, birthdate, lastLogin, status (1 objeto con dos campos: online y available) y contacts.
// Crear una colección chats con los siguientes campos: members (array de IDs) y messages (objetos con los campos from, body y createAt)
// Crear 4 usuarios y 2 chats de ejemplo. Un chat sólo será entre 2 usuarios y el otro entre 3.
db.users.insertMany(
    [
        {
            username: "AgatICeR",
            email: "AgatICeR@gmail.com",
            password: "******",
            birthDate: new Date(1990, 01, 01),
            lastLogin: new Date(2021, 06, 02, 15, 20, 5),
            status: {
                online: false,
                available: false
            },
            contacts: []
        },{
            username: "inArYOgA",
            email: "inArYOgA@gmail.com",
            password: "******",
            birthDate: new Date(1978, 11, 15),
            lastLogin: new Date(2021, 05, 17, 10, 20, 5),
            status: {
                online: true,
                available: true
            },
            contacts: []
        },{
            username: "wATerwis",
            email: "wATerwis@gmail.com",
            password: "******",
            birthDate: new Date(1981, 05, 15),
            lastLogin: new Date(2021, 06, 03, 18, 25, 5),
            status: {
                online: true,
                available: true
            },
            contacts: []
        },{
            username: "uTicanDr",
            email: "uTicanDr@gmail.com",
            password: "******",
            birthDate: new Date(1994, 00, 06),
            lastLogin: new Date(2021, 06, 11, 11, 25, 5),
            status: {
                online: true,
                available: false
            },
            contacts: []
        }
    ]
);

const users = db.users.find().toArray();

db.users.update({_id: users[0]._id}, {$set: {contacts: [users[1]._id, users[2]._id, users[3]._id]}});
db.users.update({_id: users[1]._id}, {$set: {contacts: [users[0]._id, users[2]._id]}});
db.users.update({_id: users[2]._id}, {$set: {contacts: [users[0]._id, users[1]._id]}});
db.users.update({_id: users[3]._id}, {$set: {contacts: [users[0]._id]}});

// Create collection and chats
db.chats.insertMany(
    [
        {
            members: [users[0]._id, users[1]._id, users[2]._id],
            messages: [
                {
                    from: users[0]._id,
                    body: "Who are you? British, American? What?",
                    createdAt: new Date(2021, 06, 11, 11, 25, 5),
                },{
                    from: users[1]._id,
                    body: "We're American! What're you?",
                    createdAt: new Date(2021, 06, 11, 11, 25, 20),
                },{
                    from: users[0]._id,
                    body: "I'm a German, you idiot!",
                    createdAt: new Date(2021, 06, 11, 11, 26, 20),
                },{
                    from: users[1]._id,
                    body: "You speak English pretty good for a German.",
                    createdAt: new Date(2021, 06, 11, 11, 26, 40),
                },{
                    from: users[0]._id,
                    body: "I agree.",
                    createdAt: new Date(2021, 06, 11, 11, 26, 57),
                },{
                    from: users[2]._id,
                    body: "I can see since you didn't see what happened inside, the Nazis being there must look odd.",
                    createdAt: new Date(2021, 06, 11, 11, 27, 57),
                },{
                    from: users[1]._id,
                    body: "Yeah, we got a word for that kinda odd in English. It's called suspicious.",
                    createdAt: new Date(2021, 06, 11, 11, 28, 57),
                },
            ]
        },{
            members: [users[0]._id, users[3]._id],
            messages: [
                {
                    from: users[0]._id,
                    body: "What country you from?!",
                    createdAt: new Date(2021, 06, 11, 11, 25, 5),
                },{
                    from: users[3]._id,
                    body: "What?",
                    createdAt: new Date(2021, 06, 11, 11, 25, 20),
                },{
                    from: users[0]._id,
                    body: "What ain't no country I've ever heard of! They speak English in What?",
                    createdAt: new Date(2021, 06, 11, 11, 26, 20),
                },{
                    from: users[3]._id,
                    body: "What?",
                    createdAt: new Date(2021, 06, 11, 11, 26, 40),
                },{
                    from: users[0]._id,
                    body: "English motherfucker do you speak it!?",
                    createdAt: new Date(2021, 06, 11, 11, 26, 57),
                },{
                    from: users[3]._id,
                    body: "Yes!",
                    createdAt: new Date(2021, 06, 11, 11, 27, 57),
                },{
                    from: users[0]._id,
                    body: "Then you know what I am saying?",
                    createdAt: new Date(2021, 06, 11, 11, 27, 30),
                },{
                    from: users[3]._id,
                    body: "Yes!",
                    createdAt: new Date(2021, 06, 11, 11, 27, 32),
                },{
                    from: users[0]._id,
                    body: "Describe what Marcellus Wallace looks like.",
                    createdAt: new Date(2021, 06, 11, 11, 27, 35),
                },{
                    from: users[3]._id,
                    body: "What?",
                    createdAt: new Date(2021, 06, 11, 11, 27, 40),
                },{
                    from: users[0]._id,
                    body: "Say what again. SAY WHAT again! And I dare you, I double dare you motherfucker! Say what one more time.",
                    createdAt: new Date(2021, 06, 11, 11, 27, 42),
                },
            ]
        }
    ]
);

// Consultar todos los usuarios conectados y disponibles.
db.users.find({"status.online": true, "status.available": true}).pretty();

// Cambiar todos los usuarios a conectados y actualizar la fecha del lastLogin.
db.users.update({}, {$set: {"status.online": true, lastLogin: new Date()}}, {multi:true})

// Consultar los mensajes del chat en el que están los 3 usuarios.
db.chats.find({members: {$size: 3}}, {"messages.body": true}).pretty();