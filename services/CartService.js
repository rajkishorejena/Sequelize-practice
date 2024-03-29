
const Cart = require("../models/Cart");
const Product = require("../models/Product");


const addItemToCart= async(response)=>{
    const {userId,productId,quantity} = response
      try{
         const cartItem = await Cart.create({
            userId,
            productId,
            quantity
         });
         return cartItem;
      }catch(e){
        console.log("e",e);
      }
};

const getCartByUserId = async(userId)=>{
    try{
      const response = await Cart.findAll({where:{userId},include:[
        {
          model:Product,
        }
      ]})
      
      return response;
    }catch(e){
        console.log("")
    }
}
module.exports = {addItemToCart,getCartByUserId};