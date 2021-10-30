const jwt = require('jsonwebtoken');
const key = "pruebaTP"
function generateToken(User){
    return jwt.sign({data: User}, key,{expiresIn: '24h'})
}

function decriptToken(token){
  return jwt.decode(token, key);
}

module.exports = { generateToken, decriptToken };