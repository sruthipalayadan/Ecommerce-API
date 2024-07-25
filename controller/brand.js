const brandRepository = require("../repositories/brand");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");



const getAllBrand = asyncHandler(async (req, res, next) => {
    const brands = await brandRepository.getAllBrand();
    res.status(200).json({ success: true, data: brands });
  });
 
  const getBrandById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const brand = await brandRepository.getBrandById(id);
    if(brand&&brand.length)
      {
       res.status(200).json({ success: true, data: brand });
      }
     else{
      next(new ErrorResponse(`brand doesnot exist with id: ${id}`, 404));
     }
  });
 

  const createBrand = asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { brand_name } = req.body;
    const brand = await brandRepository.createBrand(
      brand_name
    );
    console.log("true:",brand);
    if (brand) {
      res.status(201).json({ message: "brand added successfully" });
    }
  });
  
  

  const updateBrand = asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { id } = req.params;
    const updateData = req.body;
    const recordExist = await brandRepository.checkBrandExistsById(id);
  
    if (recordExist) {
      await brandRepository.updateOneBrand(updateData,id);
      res.status(200).json({ message: "successfully updated  the brand " });
    } else {
      next(new ErrorResponse(`brand doesnot exist with id: ${id}`, 404));
    }
  });
  


  const deleteBrand = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
  
    const recordExist = await brandRepository.checkBrandExistsById(id);
    if (recordExist) {
      await brandRepository.deleteOneBrand(id);
      res.status(200).json({ message: "successfully deleted  the brand " });
    } else {
      next(new ErrorResponse(`brand doesnot exist with id: ${id}`, 404));
    }
  });
  
  module.exports = {
    getAllBrand,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand,
  };
  