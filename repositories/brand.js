
const {Brand}=require("../models/models")


const getAllBrand=()=>{
    return new Promise((resolve, reject) => {
             Brand.findAll().then(
                (data)=>resolve(data)
            ).catch((error)=>
                reject(error)
            ); 
    })  
}

const getBrandById=(id)=>{
    return new Promise((resolve, reject) => {
        Brand.findAll({where:{brand_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            reject(error)
        );

    })
}


const createBrand =(brand_name)=>{
    return new Promise((resolve, reject) => {

        Brand.create({brand_name}).then(
            (data)=>resolve(true)
        ).catch((error)=>
            reject(error)
        );

    })
}

 const checkBrandExistsById=(id)=>{
    return new Promise((resolve, reject) => {

        Brand.findOne({where:{brand_id:id}}).then(
            (data)=>resolve(data)
        ).catch((error)=>
            resolve(false)
        );
          
    })
};

 async function updateOneBrand(updateData,id)
    {
        
        return new Promise((resolve, reject) => {
            
            Brand.update(updateData,{where:{brand_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    };
    const deleteOneBrand=function(id)
    {
        
        return new Promise((resolve, reject) => {
           

            Brand.destroy({where:{brand_id:id}}).then(
                (data)=>resolve(data)
            ).catch((error)=>reject(error));

        })
    };



module.exports={getAllBrand,getBrandById,createBrand,checkBrandExistsById,updateOneBrand,deleteOneBrand};