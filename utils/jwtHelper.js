var jwt = require('jsonwebtoken');
 var SECRET="upcode123";

 function createJwt(userId)
 {
    var token = jwt.sign({userId: userId }, SECRET);
    return token;

 }


 function verifyToken(token)
 {
   return new Promise((resolve, reject) => {
    const formattedToken=token.replace('Bearer ','');
    jwt.verify(formattedToken,SECRET,(err,decoded)=>{
        if(err)
        {
           return  reject({valid:false,error:err});
        }
        else
        {
            resolve({valid:true,userid:decoded.userId});

         }
        })
    })
   
 };
module.exports={createJwt,verifyToken};