const dbconfig={
    user:'training_user' ,
    password:'upcode',
    host:'localhost',
    port:5433,
    database:'ecommerce_app'}



const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  port:dbconfig.port,
  dialect: 'postgres' 
});


sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

    sequelize.sync().then((data)=>{
        console.log("synced:",data);
    }).catch((error)=>{
        console.log("syncing failed",error);
    });

  })
  .catch((error) => {
    console.log("Unable to connect to the database:", error);
  });

module.exports=sequelize;