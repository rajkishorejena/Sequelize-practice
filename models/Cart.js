const {DataTypes} = require('sequelize');

const  sequelize = require("../services/MySqlConnect");

const User = require("./User");
const Product = require("./Product");


const Cart = sequelize.define("Cart",{
    userId:{
        type:DataTypes.INTEGER,
        // references:{
        //     model:User,
        //     key:id
        // },
        allowNull:false,
    },
    productId:{
        type:DataTypes.INTEGER,
        // references:{
        //     model:Product,
        //     key:id
        // },
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});

Cart.belongsTo(Product,{foreignKey:"productId"});

module.exports = Cart;