const ordereditemRepository = require("../repositories/ordereditem");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");



const getAllOrderedItem = asyncHandler(async (req, res, next) => {
    const orders = await ordereditemRepository.getAllOrderedItem();
    res.status(200).json({ success: true, data: orders });
  });
 
  const getOrderedItemById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const ordereditem = await ordereditemRepository.getOrderedItemById(id);
    if(ordereditem&&ordereditem.length)
      {
       res.status(200).json({ success: true, data: ordereditem });
      }
     else{
      next(new ErrorResponse(`ordered item doesnot exist with id: ${id}`, 404));
     }
  });


  const getOrderedItemByOrderId = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const ordereditem = await ordereditemRepository.getOrderedItemByOrderId(id);
    if(ordereditem&&ordereditem.length)
      {
       res.status(200).json({ success: true, data: ordereditem });
      }
     else{
      next(new ErrorResponse(`ordered item doesnot exist with id: ${id}`, 404));
     }
  });




 

  const createOrderedItem = asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { product_id,order_id,qty,unit_price } = req.body;
    const ordereditem = await ordereditemRepository.createOrderedItem(
        product_id,
        order_id,
        qty,
        unit_price
    );
    console.log("true:",ordereditem);
    if (ordereditem) {
      res.status(201).json({ message: "ordered item added successfully" });
    }
  });
  
  

  const updateOrderedItem = asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { id } = req.params;
    const updateData = req.body;
    const recordExist = await ordereditemRepository.checkOrderedItemExistsById(id);
  
    if (recordExist) {
      await ordereditemRepository.updateOrderedItem(updateData,id);
      res.status(200).json({ message: "successfully updated  the ordered item " });
    } else {
      next(new ErrorResponse(`ordered item doesnot exist with id: ${id}`, 404));
    }
  });
  


  const deleteOrderedItem = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
  
    const recordExist = await ordereditemRepository.checkOrderedItemExistsById(id);
    if (recordExist) {
      await ordereditemRepository.deleteOrderedItem(id);
      res.status(200).json({ message: "successfully deleted  the ordered item " });
    } else {
      next(new ErrorResponse(`ordered item doesnot exist with id: ${id}`, 404));
    }
  });
  
  module.exports = {
    getAllOrderedItem,
    getOrderedItemById,
    createOrderedItem,
    updateOrderedItem,
    deleteOrderedItem,
    getOrderedItemByOrderId
  };
  