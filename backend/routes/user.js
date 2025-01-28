const express=require('express')
const router=express.Router();
const User=require('../db/index.js')
const zod=require('zod');
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;
const signupBody=zod.object({
    username:zod.string.email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
})

const signinBody=zod.object({
    username:zod.string.email(),
    password:zod.string()
})
router.post('/signup',async (req,res)=>{
    try{
        const {success}=signupBody.safeParse(req.body);
        if(!success) {
            res.sendStatus(411).json({
                message:'Incorrect inputs'
            })
        }
        const exist=User.findOne({username:req.body.username});
        if(exist) {
            res.sendStatus(411).status({
                message:"Email already taken"
            })
        }
        const user=await User.create({
            username:req.body.username,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            password:req.body.password
        })
        

        const userid=user._id;

        User.save(user);
        const jwtToken=jwt.sign({userid},JWT_SECRET);
        res.sendStatus(200).status({
            message:"User created successfully",
            token:jwtToken
        })
    } catch(err){
        res.sendStatus(500).status({
            message:"Internal server error"
        })
    }

})
router.post('/signin',(req,res)=>{
    try {
        const {success}=signinBody.safeParse(req.body);
        if(!success) {
            res.sendStatus(411).json({
                message:'Incorrect inputs'
            })
        } 
        const user=User.findOne({username:req.body.username,password:req.body.password});
        if(!user) {
            res.sendStatus(411).json({
                message:'Incorrect Credentials'
            })
        }
        const userid=user._id;
        const token=jwt.verify({userid},JWT_SECRET);
        res.sendStatus(400).status({
            message:"logged in successfully",
            jwttoken:token
        })
    } catch(error) {
        res.sendStatus(500).status({
            message:"Internal server error"
        })
    }
})

module.exports=router;
