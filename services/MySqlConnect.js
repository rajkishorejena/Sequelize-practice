const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('BookStore','Rajkishore','password',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;

