const {DataTypes} = require("sequelize")
const sequelize = require("../services/MySqlConnect");



const User = sequelize.define('User',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        // unique:true,
        allowNull:false,
        primaryKey:true,
        // autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

module.exports = User;