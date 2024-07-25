const productRepository = require("../repositories/product");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
// @desc Get all products
//@route GET/api/products
//@access public
const getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await productRepository.getAllProducts();
  res.status(200).json({ success: true, data: products });
});
// @desc Get product by id
//@route GET/api/products/:id
//@access public
const getProductById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const products = await productRepository.getProductById(id);
  if(products&&products.length)
    {
     res.status(200).json({ success: true, data: products });
    }
   else{
    next(new ErrorResponse(`product doesnot exist with id: ${id}`, 404));
   }
});
// @desc Create new product
//@route POST/api/products
//@access public
const createProduct = asyncHandler(async (req, res, next) => {
  console.log("body:", req.body);
  const { title, offerprice,price,brand_id,category_id } = req.body;
  const products = await productRepository.createProduct(
    title,
    offerprice,
    price,
    brand_id,
    category_id
  );
  console.log("protrue:",products);
  if (products) {
    res.status(201).json({ message: "product added successfully" });
  }
});

// @desc Update product
//@route PUT/api/products
//@access public
const updateProduct = asyncHandler(async (req, res, next) => {
  console.log("body:", req.body);
  const { id } = req.params;
  const updateData = req.body;
  const recordExist = await productRepository.checkProductExistsById(id);

  if (recordExist) {
    await productRepository.updateProduct(updateData,id);
    res.status(200).json({ message: "successfully updated  the product " });
  } else {
    next(new ErrorResponse(`product doesnot exist with id: ${id}`, 404));
  }
});
// @desc Delete product by id
//@route DELETE/api/products/:id
//@access public
const deleteProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const recordExist = await productRepository.checkProductExistsById(id);
  if (recordExist) {
    await productRepository.deleteProduct(id);
    res.status(200).json({ message: "successfully deleted  the product " });
  } else {
    next(new ErrorResponse(`product doesnot exist with id: ${id}`, 404));
  }
});

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
