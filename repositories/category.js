
const {Category}=require("../models/models")


const getAllCategory=()=>{
    return new Promise((resolve, reject) => {
             Category.findAll().then(
                (data)=>resolve(data)
            ).catch((error)=>
                reject(error)
            ); 
    })  
}

const getCategoryById=(id)=>{
    return new Promise((resolve, reject) => {
        Category.findAll({where:{category_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            reject(error)
        );

    })
}


const createCategory =(category_name)=>{
    return new Promise((resolve, reject) => {

        Category.create({category_name}).then(
            (data)=>resolve(true)
        ).catch((error)=>
            reject(error)
        );

    })
}

 const checkCategoryExistsById=(id)=>{
    return new Promise((resolve, reject) => {

        Category.findOne({where:{category_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            resolve(false)
        );
          
    })
};

 async function updateOneCategory(updateData,id)
    {
        
        return new Promise((resolve, reject) => {
            
            Category.update(updateData,{where:{category_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    };
    const deleteOneCategory=function(id)
    {
        
        return new Promise((resolve, reject) => {
           

            Category.destroy({where:{category_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    };



module.exports={getAllCategory,getCategoryById,createCategory,checkCategoryExistsById,updateOneCategory,deleteOneCategory};