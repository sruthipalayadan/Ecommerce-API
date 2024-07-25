//const { updateOrderedItem, deleteOrderedItem } = require("../controller/ordereditem");
const {OrderedItems}=require("../models/models")


const getAllOrderedItem=()=>{
    return new Promise((resolve, reject) => {
             OrderedItems.findAll().then(
                (data)=>resolve(data)
            ).catch((error)=>
                reject(error)
            ); 
    })  
}

const getOrderedItemById=(id)=>{
    return new Promise((resolve, reject) => {
        OrderedItems.findAll({where:{ordered_items_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            reject(error)
        );

    })
}

const getOrderedItemByOrderId=(id)=>{
    return new Promise((resolve, reject) => {
        OrderedItems.findAll({where:{order_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            reject(error)
        );

    })
}


const createOrderedItem =(product_id,order_id,qty,unit_price)=>{
    return new Promise((resolve, reject) => {
        const total_amount=(qty*unit_price);
        console.log("total:",total_amount);
        OrderedItems.create({product_id,order_id,qty,unit_price,total_amount}).then(
            (data)=>resolve(true)
        ).catch((error)=>
            reject(error)
        );

    })
}

 const checkOrderedItemExistsById=(id)=>{
    return new Promise((resolve, reject) => {

        OrderedItems.findOne({where:{ordered_items_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            resolve(false)
        );
          
    })
};

 async function updateOrderedItem(updateData,id)
    {
        
        return new Promise((resolve, reject) => {
            
            OrderedItems.update(updateData,{where:{ordered_item_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    };
    const deleteOrderedItem=function(id)
    {
        
        return new Promise((resolve, reject) => {
           

            Order.destroy({where:{ordered_items_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    };



module.exports={getAllOrderedItem,getOrderedItemById,getOrderedItemByOrderId,createOrderedItem,checkOrderedItemExistsById,updateOrderedItem,deleteOrderedItem};