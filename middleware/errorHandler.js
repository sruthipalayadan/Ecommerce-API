const errorHandler=(error,req,res,next)=>{
    console.log(error);
    res.status(error.statusCode||500).json({Message:error.message||'server error'});
}
module.exports=errorHandler;