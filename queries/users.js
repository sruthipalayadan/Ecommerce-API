// const addUserQueries="INSERT INTO users(username,password,first_name,last_name,dob,address,place,city,district,state,email,phone_no) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING user_id";
// const getUserByUsernameQueries="Select user_id,first_name,username,password from users where username=$1";
// const getUserByUserIdQueries="Select user_id,first_name,username,password from users where user_id=$1";
// const getUserRolesByUserIdQueries="select r.role_name from role r inner join userrole ur on ur.role_id=r.role_id where ur.user_id=$1"
// module.exports={addUserQueries,getUserByUsernameQueries,getUserByUserIdQueries,getUserRolesByUserIdQueries};