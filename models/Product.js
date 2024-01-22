const {DataTypes} = require('sequelize');
const sequelize = require('../services/MySqlConnect');


const Product= sequelize.define("Product",{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    }

});

module.exports = Product;
