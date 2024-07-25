const { Sequelize,Model,DataTypes, ForeignKeyConstraintError}=require('sequelize');
const sequelize=require('../config/orm');


const Product=sequelize.define('product',
    {
        product_id:{
            type:DataTypes.INTEGER,
            allowNull: false, // true by default
           //defaultValue: 1,
            primaryKey: true, // false by default
            autoIncrement: true, // false by default
            unique: true,
            field: "product_id"

        },
        title:DataTypes.STRING,
        offerprice:DataTypes.INTEGER,
        price:DataTypes.INTEGER
    }
);


const Brand=sequelize.define('brand',
    {
        brand_id:{
            type:DataTypes.INTEGER,
            allowNull: false, // true by default
           //defaultValue: 1,
            primaryKey: true, // false by default
            autoIncrement: true, // false by default
            unique: true,
            field: "brand_id"

        },
        brand_name:DataTypes.STRING
       
    }
);
Brand.hasMany(Product,{foreignKey:'brand_id'});
Product.belongsTo(Brand,{foreignKey:'brand_id'});


const Category=sequelize.define('category',
    {
        category_id:{
            type:DataTypes.INTEGER,
            allowNull: false, // true by default
           //defaultValue: 1,
            primaryKey: true, // false by default
            autoIncrement: true, // false by default
            unique: true,
            field: "category_id"

        },
        category_name:DataTypes.STRING
       
    }
);
Category.hasMany(Product,{foreignKey:'category_id'});
Product.belongsTo(Category,{foreignKey:'category_id'});

const User=sequelize.define('user',
    {
        user_id:{
            type:DataTypes.INTEGER,
            allowNull: false, // true by default
           //defaultValue: 1,
            primaryKey: true, // false by default
            autoIncrement: true, // false by default
            unique: true,
            field: "user_id"

        },

        username:{
            type:DataTypes.STRING,
            unique: true,
            field: "username"
        },
        password:{
            type:DataTypes.STRING,
            unique: true,
            field: "password"
        },
        name:DataTypes.STRING,
        house_name:DataTypes.STRING,
        place:DataTypes.STRING,
        city:DataTypes.STRING,
        state:DataTypes.STRING,
        pincode:DataTypes.INTEGER,
        contact:DataTypes.INTEGER
    }
);

const Order=sequelize.define('order',
    {
        order_id:{
            type:DataTypes.INTEGER,
            allowNull: false, // true by default
           //defaultValue: 1,
            primaryKey: true, // false by default
            autoIncrement: true, // false by default
            unique: true,
            field: "order_id"

        },
        order_date:DataTypes.STRING,
        

       
    }
);
User.hasMany(Order,{foreignKey:'user_id'});
Order.belongsTo(User,{foreignKey:'user_id'});



const OrderedItems=sequelize.define('ordereditems',
    {
        ordered_items_id:{
            type:DataTypes.INTEGER,
            allowNull: false, // true by default
           //defaultValue: 1,
            primaryKey: true, // false by default
            autoIncrement: true, // false by default
            unique: true,
            field: "ordered_items_id"

        },
        qty:DataTypes.INTEGER,
        unit_price:DataTypes.INTEGER,
        total_amount:DataTypes.INTEGER

       
    }
);
Order.hasMany(OrderedItems,{foreignKey:'order_id'});
OrderedItems.belongsTo(Order,{foreignKey:'order_id'});

 Product.hasMany(OrderedItems,{foreignKey:'product_id'});
 OrderedItems.belongsTo(Product,{foreignKey:'product_id'});






module.exports={Product,Brand,Category,User,Order,OrderedItems};