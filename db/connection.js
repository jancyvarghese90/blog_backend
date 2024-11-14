const mongoose=require('mongoose')
mongoose.connect(process.env.mongodb_url)
.then(()=>{console.log("connection established")})
.catch((err)=>{console.log(err)})