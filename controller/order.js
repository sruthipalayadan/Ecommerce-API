const orderRepository = require("../repositories/order");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");



const getAllOrder = asyncHandler(async (req, res, next) => {
    const orders = await orderRepository.getAllOrder();
    res.status(200).json({ success: true, data: orders });
  });
 
  const getOrderById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const order = await orderRepository.getOrderById(id);
    if(order&&order.length)
      {
       res.status(200).json({ success: true, data: order });
      }
     else{
      next(new ErrorResponse(`order doesnot exist with id: ${id}`, 404));
     }
  });
 

  const createOrder = asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { user_id,order_date } = req.body;
    const order = await orderRepository.createOrder(
        user_id,order_date
    );
    console.log("true:",order);
    if (order) {
      res.status(201).json({ message: "order added successfully" });
    }
  });
  
  

  const updateOrder = asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { id } = req.params;
    const updateData = req.body;
    const recordExist = await orderRepository.checkOrderExistsById(id);
  
    if (recordExist) {
      await orderRepository.updateOneOrder(updateData,id);
      res.status(200).json({ message: "successfully updated  the order " });
    } else {
      next(new ErrorResponse(`order doesnot exist with id: ${id}`, 404));
    }
  });
  


  const deleteOrder = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
  
    const recordExist = await orderRepository.checkOrderExistsById(id);
    if (recordExist) {
      await orderRepository.deleteOneOrder(id);
      res.status(200).json({ message: "successfully deleted  the order " });
    } else {
      next(new ErrorResponse(`order doesnot exist with id: ${id}`, 404));
    }
  });
  
  module.exports = {
    getAllOrder,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
  };
  