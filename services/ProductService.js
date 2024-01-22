const Product  = require("../models/Product")

const addProduct = async(response) =>{
    const {title,description,price} = response;
     try{
           const product = await Product.create({
            title,
            description,
            price
           });

           return product ;
     }catch(e){
        console.log(e)
     }
};

module.exports = {addProduct};