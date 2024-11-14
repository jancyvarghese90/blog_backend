const express= require("express");
require("dotenv").config();
const cors=require('cors')
var morgan=require("morgan")
require('./db/connection')
const userRoutes=require('./routes/userroutes');
const blogRoutes=require('./routes/blogroutes');
const app=express();
app.use(morgan("dev"));
app.use(cors());
app.use('/user',userRoutes);
app.use('/blog',blogRoutes);
port=process.env.port
app.listen(process.env.port,()=>{
    console.log(`server is running in the port ${process.env.port}`)
}) 

