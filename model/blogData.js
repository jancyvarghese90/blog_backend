const mongoose=require('mongoose')
const blogSchema=mongoose.Schema({
    title:String,
    image:String,
    description:String 
})
const blogData=mongoose.model('blogdata', blogSchema); //blogdatatitle is  collection name
module.exports=blogData;