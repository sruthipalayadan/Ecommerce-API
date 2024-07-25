const express = require("express");
const router=express.Router();
const{ getAllUser,getUserById,updateUser,deleteUser,createUser,login}=require('../controller/users');
const {verifyTokenHandler}=require("../middleware/jwtHandler"); 

router.get('/users',getAllUser);
router.route('/users/:id').get(getUserById).put([verifyTokenHandler],updateUser).delete([verifyTokenHandler],deleteUser);
router.post('/signup',createUser) ; 
router.post('/login',login) ; 

 module.exports=router;