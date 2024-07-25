const express = require("express");
const router=express.Router();
const{ getAllBrand,getBrandById,createBrand,updateBrand,deleteBrand}=require('../controller/brand');
   
const {verifyTokenHandler}=require("../middleware/jwtHandler");

router.get('/',getAllBrand);
router.route('/:id').get(getBrandById).put([verifyTokenHandler],updateBrand).delete([verifyTokenHandler],deleteBrand);
router.post('/',[verifyTokenHandler],createBrand) ; 

 module.exports=router;