
const {hashPassword}=require('../utils/passwordHelper');
const {User}=require("../models/models");



const createUser=(username,password,name,house_name,place,city,state,pincode,contact)=>
    {
        const hashedpassword=hashPassword(password);
     password=hashedpassword;
        console.log("hashedrepo:",hashedpassword);
        return new Promise((resolve, reject) => {

                    User.create({username,password,name,house_name,place,city,state,pincode,contact}).then((data)=>{
                        resolve(data.user_id);
                        console.log("data:",data);
                        console.log("data:",data.user_id);;

                    }).catch(error=>{
                        reject(error);
                    })

        })
    };

    const getUserByUsername=(username)=>
        {
            return new Promise((resolve, reject) => {

                User.findAll({
                 where:{ username:username}
                    }).then((data)=>{
                        resolve(data);
                        console.log("data:",data)
                    }).catch((error)=>reject(error))

            })
        };


        // getUserByUserId=(userId)=>
        //     {
        //         return new Promise((resolve, reject) => {
        //             pool.query(getUserByUserIdQueries,[userId],(error,results)=>
        //             {
        //                 if(error){
        //                     reject(error);
        //                 }
        //                 else{
                            
        //                     resolve(results.rows);
        //                 }
        //             })
        //         })
        //     };


            const getUserById=(id)=>{
                return new Promise((resolve, reject) => {
                    User.findAll({where:{user_id:id}}).then(
                        (data)=>resolve(data)
                    ).catch((error)=>
                        reject(error)
                    );
            
            
                })
            };


            const checkUserExistsById=(id)=>{
                return new Promise((resolve, reject) => {
            
                    User.findAll({where:{user_id:id}}).then(
                        (data)=>resolve(data)
                    ).catch((error)=>
                        resolve(false)
                    );
                    
                })
            };
            
            const updateUser=(updateData,id)=>
                {
                    return new Promise((resolve, reject) => {
            
                        User.update(updateData,{where:{user_id:id}}).then(
                            (data)=>resolve(data)
                        ).catch((error)=>reject(error));
            
                    })
                };
                const deleteUser=(id)=>{
                    return new Promise((resolve, reject) => {
                        User.destroy({where:{user_id:id}}).then(
                            (data)=>resolve(data)
                        ).catch((error)=>reject(error)); 
            
                    })
                };

                const getAllUser=()=>{
                    return new Promise((resolve, reject) => {
                             User.findAll().then(
                                (data)=>resolve(data)
                            ).catch((error)=>
                                reject(error)
                            );
                      
                    })  
                }
            

    

    module.exports={getAllUser,createUser,getUserByUsername,getUserById,deleteUser,updateUser,checkUserExistsById};