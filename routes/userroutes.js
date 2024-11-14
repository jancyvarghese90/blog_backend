const express=require('express');
const router=express.Router();
const userModel=require('../model/userData')
const jwt=require('jsonwebtoken')
router.use(express.json());

router.post('/login',async(req,res)=>{

    try {
        const user=await userModel.findOne({email:req.body.email})
        if(!user){
            res.send('user not found')
        }
        else{
            if(user.password==req.body.password){
                const payload={email:user.email,password:user.password}
                const token=jwt.sign(payload,'blogApp')
                res.status(200).send({message:'Login successful',token:token})

            }
            else{
                res.status(400).send('Invalid credentials')
            }
        }
        
    } catch (error) {
        
        console.log(error)
    }
})

router.post('/s',async(req,res)=>{
    try {
       const data=req.body;
       await userModel(data).save()
       res.status(200).send({message:"data added to db"});
    } catch (error) {
        console.log(error)
    }
})
module.exports=router