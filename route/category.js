const express = require("express");
const router=express.Router();
const{ getAllCategory,getCategoryById,createCategory,updateCategory,deleteCategory}=require('../controller/category');
   
const {verifyTokenHandler}=require("../middleware/jwtHandler");

router.get('/',getAllCategory);
router.route('/:id').get(getCategoryById).put([verifyTokenHandler],updateCategory).delete([verifyTokenHandler],deleteCategory);
router.post('/',[verifyTokenHandler],createCategory) ; 

 module.exports=router;