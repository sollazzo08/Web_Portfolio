const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.secret;
//private route middleware
//pass this function to routes you want to protect 
module.exports = function(req,res,next){
  const token = req.header('auth-token');
  if(!token) 
    return res.status(401).send('Accress Denied, no token.');
    try {
      const verified = jwt.verify(token,SECRET);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).send('Invalid Token');
    }
}

