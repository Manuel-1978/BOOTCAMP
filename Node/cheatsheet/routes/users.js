const express = require("express");
const bcrypt= require("bcrypt")
const router = express.Router();
const ramda =require("ramda");
const User = require("../models/user");


//1
router.get("/", (req, res) => {
    // Similar al find de Mongo. Si el filtro está vacío,
    // me devuelve todos los documentos.
    const PAGE_SIZE=2;
    const page= req.query.page || 1;

   User.find({active:true})
   .skip((page-1)* PAGE_SIZE)//Numero de documentos qie saltara
   .limit(PAGE_SIZE)    //Numero de documentos que devolvera
   .exec((error, users) => {
    if(error) {
        res.status(400).json({ok: false, error});
    } else {
        res.status(201).json({ok: true, users});
    }
   })
});

//2
router.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message:`Petición GET con parámetro: ${id}`});
});

//3
router.post("/", (req, res) => {

    let body = req.body
   
    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password,10)
    });

    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok: true, savedUser});
        }
    });


    // if(body.username){
    //     res.status(200).json({message: `Recibido username: ${body.username}`})
    // } else {
    //     res.status(400).json({ok: false, message: "El username es obligatorio"})
    // }
})
 router.put("/:id",(req,res)=>{
     const id= req.params.id;
     const body= ramda.pick(["username","email"],req.body)

     User.findByIdAndUpdate(
         id,
        body,
        {new :true,runValidators:true,context:'query'}, //options
        (error,updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(201).json({ok: true, updatedUser});
            }
        }
     )
 })
 router.delete("/:id",(req,res)=>{
     const id= req.params.id;


    //  User.findByIdAndRemove(id,(error,removedUser)=>{
    //     if(error) {
    //         res.status(400).json({ok: false, error});
    //     } else {
    //         res.status(201).json({ok: true,removedUser });
    //     }
    // })
    User.findByIdAndUpdate(
        id,
       {active:false},
       {new :true,runValidators:true,context:'query'}, //options
       (error,updatedUser) => {
           if(error) {
               res.status(400).json({ok: false, error});
           } else if(!updatedUser){
               res.status(400).json({ok: false, error:"User not found"});

           }else{
               res.status(200).json({ok:true,updatedUser})
           }
       }
    )
 });
module.exports = router;