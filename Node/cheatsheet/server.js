const express= require("express");
const app = express();
const mongoose= require("mongoose");

app.use(express.json());

app.get("/:id",(req,res)=>{
    res.json({message:"Peticion Get recibida correctamente."});
});
app.get("/:id",(req, res)=>{
    let id=req.json({})})

mongoose.connect("mongodb://localhost:27017/users",{
    useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
});