const dotenv=require("dotenv");
const express=require("express");
const errorHandler=require("./middleware/errorHandler");
dotenv.config({path:'./config/config.env'});
const app=express();

var sequelize=require('./config/orm');
app.use(express.json());
PORT=process.env.PORT||9000;

const users=require('./route/users');
app.use('/api/auth',users);

const products=require('./route/product');
app.use('/api/products',products);

const categories=require('./route/category');
app.use('/api/categories',categories);

const brands=require('./route/brand');
app.use('/api/brands',brands);

const orders=require('./route/order');
app.use('/api/orders',orders);

const ordereditems=require('./route/ordereditem');
app.use('/api/ordered_items',ordereditems);


app.use(errorHandler);
app.listen(PORT,()=>
    {
        console.log(`listening  on PORT : ${PORT}` )
    }

)
