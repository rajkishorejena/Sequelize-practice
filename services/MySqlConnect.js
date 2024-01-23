const { Sequelize } = require('sequelize');


// const sequelize = new Sequelize('BookStore','Rajkishore','password',{
//     host:'localhost',
//     dialect:'mysql'
// });

const sequelize = new Sequelize('neosoft','postgres','password',{
    host:'localhost',
    dialect:'postgres'
});

module.exports = sequelize;

