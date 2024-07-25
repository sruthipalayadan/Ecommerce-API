const {Order}=require("../models/models")
const pool=require('../config/db');
const {orderQueries}=require("../queries/order");

const getAllOrder=()=>{
    return new Promise((resolve, reject) => {
             Order.findAll().then(
                (data)=>resolve(data)
            ).catch((error)=>
                reject(error)
            ); 
    })  
}

const getOrderById=(id)=>{
    return new Promise((resolve, reject) => {

        pool.query(orderQueries,[id],(error,results)=>
            {
                if(error){
                    reject(error);
                }
                else{
                   
                    resolve(results.rows);
                }
            })




        // Order.findAll({where:{order_id:id}}).then(
        //     (data)=>resolve(data)
        // ).catch((error)=>
        //     reject(error)
        // );

    })
}


    	   


const createOrder =(user_id,order_date)=>{
    return new Promise((resolve, reject) => {

        Order.create({user_id,order_date}).then(
            (data)=>resolve(true)
        ).catch((error)=>
            reject(error)
        );

    })
}

 const checkOrderExistsById=(id)=>{
    return new Promise((resolve, reject) => {

        Order.findOne({where:{order_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            resolve(false)
        );
          
    })
};

 async function updateOneOrder(updateData,id)
    {
        
        return new Promise((resolve, reject) => {
            
            Order.update(updateData,{where:{order_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    };
    const deleteOneOrder=function(id)
    {
        
        return new Promise((resolve, reject) => {
           

            Order.destroy({where:{order_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    };



module.exports={getAllOrder,getOrderById,createOrder,checkOrderExistsById,updateOneOrder,deleteOneOrder};