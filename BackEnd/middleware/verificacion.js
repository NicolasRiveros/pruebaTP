const jwt = require('jsonwebtoken');
const key = "key"
exports.verify = (res,next)=>{
    const token = req.headers.autorization
    if(!token)res.status(403).json({error:'Token invalido'})
    else{
        jwt.verify(token.split(" ")[1],key,(err, value)=> {
            
            if(err)res.status(500).json({error:'fallo la autenticacion'})
            req.User = value.data
            next();
        }) 
    }
}