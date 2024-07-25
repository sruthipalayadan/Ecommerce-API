const express = require("express");
const router=express.Router();
const{ getAllProducts,getProductById,createProduct,updateProduct,deleteProduct}=require('../controller/product');
   
const {verifyTokenHandler}=require("../middleware/jwtHandler");

router.get('/',getAllProducts);
router.route('/:id').get(getProductById).put([verifyTokenHandler],updateProduct).delete([verifyTokenHandler],deleteProduct);
router.post('/',[verifyTokenHandler],createProduct) ; 

 module.exports=router;