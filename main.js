const sequelize = require("./services/MySqlConnect");

const {addUser}  = require("./services/User");
const {addProduct} = require("./services/ProductService");
const {addItemToCart, getCartByUserId}  = require("./services/CartService");
const { json } = require("sequelize");

// sequelize.sync().then(result=>{console.log(result)}).catch(err=>{console.log("error 1.....",err)});


async function initiate (){
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
       const user = {
        name:"Rajkishore",
        email:"raj@gmail.com",
        password:"123456"
       }

        const response =  await addUser(user);
        console.log("adduser",response);
    
        // const product = {
        //     title:"IPhone",
        //     description:"iPhone 15 Pro..",
        //     price:12000
        // }

        // const response = await addProduct(product);
        // console.log("addProduct",response);

    //    const item = {
    //     userId:1,
    //     productId:2,
    //     quantity:3
    //    }
    //     const response = await addItemToCart(item);
    //     console.log(response);

        // const response = await getCartByUserId(1);
        // console.log(JSON.parse(JSON.stringify(response)));
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

initiate();
