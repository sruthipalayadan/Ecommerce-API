
const {Product}=require("../models/models")

const getAllProducts=()=>{
    return new Promise((resolve, reject) => {
             Product.findAll().then(
                (data)=>resolve(data)
            ).catch((error)=>
                reject(error)
            );
      
    })  
}

const getProductById=(id)=>{
    return new Promise((resolve, reject) => {
        Product.findAll({where:{product_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            reject(error)
        );


    })
}


const createProduct =(title,offerprice,price,category_id,brand_id)=>{
    return new Promise((resolve, reject) => {

        Product.create({title,offerprice,price,category_id,brand_id}).then(
            (data)=>resolve(true)
        ).catch((error)=>
            reject(error)
        );

        
    })
}

const checkProductExistsById=(id)=>{
    return new Promise((resolve, reject) => {

        Product.findAll({where:{product_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            resolve(false)
        );
        
    })
}

const updateProduct=(updateData,id)=>
    {
        return new Promise((resolve, reject) => {

            Product.update(updateData,{where:{product_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    }
    const deleteProduct=(id)=>{
        return new Promise((resolve, reject) => {
            Product.destroy({where:{product_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error)); 

        })
    }

module.exports={getAllProducts,getProductById,createProduct,checkProductExistsById,updateProduct,deleteProduct};