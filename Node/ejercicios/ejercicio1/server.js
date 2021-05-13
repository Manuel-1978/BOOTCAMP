require("./config/config");

const express= require("express");
const app = express();

app.use(express.json());
 let users=[];
app.get("/users",(req, res)=>{
    const user={name:"John",email:"john@gmail.com"}
res.json({ok:true,user});
});

 app.put("/users:id",(req,res)=>{
     const id =req.params.id;
     res.json({id})
 });

 app.delete("/users:id",(req,res)=>{
    const id =req.params.id;
    const removeUser=users.splice(id,1);
    res.json(200).json(removeUser);
});
app.post("/users", (req, res) => {
    const body = req.body; // necesita el middleware, definido arriba: app.use(express.json());

 

    if (body.username) {
        res.status(400).json({ ok: false, message: "Name is required" });
    } else {
        users.push(body);
        res.status(201).json({ user: body });
    }
});

 app.listen(process.env.PORT,()=>{
    console.log("Listening on port",process.env.PORT)
});



