const categoryRepository = require("../repositories/category");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");



const getAllCategory = asyncHandler(async (req, res, next) => {
    const categories = await categoryRepository.getAllCategory();
    res.status(200).json({ success: true, data: categories });
  });
 
  const getCategoryById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const category = await categoryRepository.getCategoryById(id);
    if(category&&category.length)
      {
       res.status(200).json({ success: true, data: category });
      }
     else{
      next(new ErrorResponse(`product doesnot exist with id: ${id}`, 404));
     }
  });
 

  const createCategory = asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { category_name } = req.body;
    const category = await categoryRepository.createCategory(
      category_name
    );
    console.log("protrue:",category);
    if (category) {
      res.status(201).json({ message: "category added successfully" });
    }
  });
  
  

  const updateCategory = asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { id } = req.params;
    const updateData = req.body;
    const recordExist = await categoryRepository.checkCategoryExistsById(id);
  
    if (recordExist) {
      await categoryRepository.updateOneCategory(updateData,id);
      res.status(200).json({ message: "successfully updated  the category " });
    } else {
      next(new ErrorResponse(`category doesnot exist with id: ${id}`, 404));
    }
  });
  


  const deleteCategory = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
  
    const recordExist = await categoryRepository.checkCategoryExistsById(id);
    if (recordExist) {
      await categoryRepository.deleteOneCategory(id);
      res.status(200).json({ message: "successfully deleted  the category " });
    } else {
      next(new ErrorResponse(`category doesnot exist with id: ${id}`, 404));
    }
  });
  
  module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
  };
  