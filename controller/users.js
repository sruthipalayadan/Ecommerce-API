const usersRepository = require("../repositories/users");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const {createJwt}=require("../utils/jwtHelper");
const {compareWithHashedPassword}=require("../utils/passwordHelper");
// @desc Create new user
//@route POST/api/auth/signup
//@access public
const createUser= asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { username,password,name,house_name,place,city,state,pincode,contact} = req.body;
    
    
    const users=await usersRepository.getUserByUsername(username);
    if(users&&users.length>0){
       return next(new ErrorResponse(`username(${username}) already taken`,400));
    }
    
    const userId = await usersRepository.createUser(username,password,name,house_name,place,city,state,pincode,contact);
    const token=createJwt(userId);
    console.log("useid:",userId);
    if (userId) {
      res.status(201).json({success:true,data:{ message: "user added successfully",name:name,token:token }});
    }
  
  });

// @desc  user login
//@route POST/api/auth/login
//@access public
const login= asyncHandler(async (req, res, next) => {
  //get user by username
  //compare pw
  //invalid return 400
  //valid token

  console.log("body:", req.body);
  const { username,password } = req.body;
  const users=await usersRepository.getUserByUsername(username);
  if(!users||users.length==0){
     return next(new ErrorResponse(`Invalid credentials`,400));
  }
  const user=users[0];
  const isValid=compareWithHashedPassword(password,user.password);
  
  if(isValid)
  {
  const token=createJwt(user.user_id);
  return res.status(200).json({ message: "successfully logged in",user:{name:user.name },token:token});
  } 
  return next(new ErrorResponse("invalid credentials",400));
  
});

const getAllUser = asyncHandler(async (req, res, next) => {
  const users = await usersRepository.getAllUser();
  res.status(200).json({ success: true, data: users });
});

const getUserById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await usersRepository.getUserById(id);
  if(user&&user.length)
    {
     res.status(200).json({ success: true, data: user });
    }
   else{
    next(new ErrorResponse(`user doesnot exist with id: ${id}`, 404));
   }
});




const updateUser = asyncHandler(async (req, res, next) => {
  console.log("body:", req.body);
  const { id } = req.params;
  const updateData = req.body;
  const recordExist = await usersRepository.checkUserExistsById(id);

  if (recordExist) {
    await usersRepository.updateUser(updateData,id);
    res.status(200).json({ message: "successfully updated  the user" });
  } else {
    next(new ErrorResponse(`user doesnot exist with id: ${id}`, 404));
  }
});

const deleteUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const recordExist = await usersRepository.checkUserExistsById(id);
  if (recordExist) {
    await usersRepository.deleteUser(id);
    res.status(200).json({ message: "successfully deleted  the user " });
  } else {
    next(new ErrorResponse(`user doesnot exist with id: ${id}`, 404));
  }
});





  module.exports={createUser,login,getAllUser,getUserById,updateUser,deleteUser};