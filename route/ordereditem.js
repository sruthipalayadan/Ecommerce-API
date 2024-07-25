const express = require("express");
const router=express.Router();
const{ getAllOrderedItem,getOrderedItemById,getOrderedItemByOrderId,createOrderedItem,updateOrderedItem,deleteOrderedItem}=require('../controller/ordereditem');
   
const {verifyTokenHandler}=require("../middleware/jwtHandler");

router.get('/',getAllOrderedItem);
router.route('/:id').get(getOrderedItemById).put([verifyTokenHandler],updateOrderedItem).delete([verifyTokenHandler],deleteOrderedItem);
router.post('/',createOrderedItem) ; 
router.get('/orderId/:id',getOrderedItemByOrderId);
 module.exports=router;