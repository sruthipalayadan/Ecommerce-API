var bcrypt=require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
function hashPassword(password)
{
    var hash=bcrypt.hashSync(password,salt);
    console.log("hashed:",hash);
    return hash;
   
}

function compareWithHashedPassword(plainPassword,hashedPassword)
{
    var isMatching=bcrypt.compareSync(plainPassword,hashedPassword)
    return isMatching;
}


module.exports={hashPassword,compareWithHashedPassword};