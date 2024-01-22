
const User = require("../models/User");


 const addUser = async(response) => {
    const {name,email,password} = response;
     try{
        const user =  await User.create({
           name,
           email,
           password
         });

         if(user){
            return user
         }else{
            throw Error("Not able add User")
         }
     }catch(e){
          console.log("e",e);
     }
}

module.exports = {addUser}