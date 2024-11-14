const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    address:String,
  phonenumber:String,
    password:String,
})
const userData=mongoose.model('userdata',userSchema); //userdata is  collection name
module.exports=userData;