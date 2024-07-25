const {verifyToken}=require('../utils/jwtHelper');


const verifyTokenHandler= async(req,res,next)=>
{
    let token=req.headers['authorization'];
    if(token&&token.includes('Bearer '))
        {

            try{
                const result= await verifyToken(token);
                const userId=result.userid; 
                 req.userId=userId;
                return next();
            }
            catch(error)
            {
                return res.status(401).json({message:'Invalid token'});
            }

        }
        else{
            res.status(401).json({message:'No token provided'});
        }
};


module.exports={verifyTokenHandler};
