const express = require("express");
const router=express.Router();
const{ getAllOrder,getOrderById,createOrder,updateOrder,deleteOrder}=require('../controller/order');
   
const {verifyTokenHandler}=require("../middleware/jwtHandler");

router.get('/',getAllOrder);
router.route('/:id').get(getOrderById).put([verifyTokenHandler],updateOrder).delete([verifyTokenHandler],deleteOrder);
router.post('/',createOrder) ; 

 module.exports=router;