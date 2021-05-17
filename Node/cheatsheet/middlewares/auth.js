const jwt= require("jsonwebtoken");
const veryfyToken=(req,res,next)=>{
   let token=req.get("authorization");
   token=token && token.split(" ")[1];
  
  
    jwt.verify(token, process.env.SEED,(error,payload)=>{
        if(error){
            res.status(401).json({
                ok:false,
                error: error
            })
        }else {
            next();
        }
    });
   
}
module.exports=veryfyToken;