const User = require('../modules/login')
const tokenUtils = require('../commons/token.utils')

const obtenerLogin = async (req, res) => {
    User.findOne({ usuario: req.body.user}).then(
        userFind =>{
            if(!userFind) res.status(404).json({error: 'No se encontro usuario'})
            else{
              console.log(req.body.pass)
              console.log(userFind)
              if(req.body.pass!==userFind.pass) {
                res.status(403).json({error: 'contraseña invalida'})
              } 
              else{
                res.status(200).json({token: tokenUtils.generateToken(userFind), role: userFind.role })
              }
            }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json(error);
    })
}

module.exports = { obtenerLogin };