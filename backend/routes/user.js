const express=require('express')
const router=express.Router();
const {User}=require('../db/index.js')
const zod=require('zod');
const jwt=require('jsonwebtoken');
const authMiddleware = require('./middleware.js');
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;



const signupBody=zod.object({
    username:zod.string().email().min(4).max(30),
    firstName:zod.string().max(20),
    lastName:zod.string().max(20),
    password:zod.string().min(6)
})

const signinBody=zod.object({
    username:zod.string().email().min(4).max(30),
    password:zod.string().min(6)
})



router.post('/signup',async (req,res)=>{
    try{
        const {success}=signupBody.safeParse(req.body);
        if(!success) {
            res.status(411).json({
                message:'Incorrect inputs'
            })
            return;
        }
        const exist=await User.findOne({username:req.body.username});
        if(exist) {
            res.status(411).json({
                message:"Email already taken"
            })
            return;
        }
        const user=await User.create({
            username:req.body.username,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            password:req.body.password
        })
        
        const userId=user._id;
        const jwtToken=jwt.sign({userId},JWT_SECRET);
        res.status(200).json({
            message:"User created successfully",
            token:jwtToken
        })
    } catch(err){
        res.status(500).json({
            message:"Internal server error"
        })
    }

})



router.post('/signin',async(req,res)=>{
    try {
        const {success}=signinBody.safeParse(req.body);
        if(!success) {
            res.sendStatus(411).json({
                message:'Incorrect inputs'
            })
            return;
        } 
        const user=await User.findOne({username:req.body.username,password:req.body.password});
        if(!user) {
            res.status(411).json({
                message:'Incorrect Credentials'
            })
            return;
        }
        const userId=user._id;
        const token=jwt.sign({userId},JWT_SECRET);
        res.status(200).json({
            message:"Logged in successfully",
            jwttoken:token
        })
    } catch(error) {
        res.status(500).json({
            message:"Internal server error"
        })
    }
})

const updateBody=zod.object({
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
    password:zod.string().optional()
})

router.put('/',authMiddleware,async(req,res)=>{
    const {success}=updateBody.safeParse(req.body);
    if(!success) {
        res.status(411).json({
            message:'Error while updating information'
        })
        return;
    } 
    try{
        await User.updateOne({ _id: req.userId }, req.body);
        res.status(200).json({
            message:'Information update successfully'
        })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
    
})




router.get('/bulk',async(req,res)=>{
    try{
        const filter=req.query.filter||'';
        const users=await User.find({
            $or: [
            { firstName: { $regex: new RegExp(filter, 'i') } },  // Dynamic filter in firstName
            { lastName: { $regex: new RegExp(filter, 'i') } }    // Dynamic filter in lastName
            ]
        });
        const x=users.map((user)=>{
             return {
                firstName:user.firstName,
                lastName:user.lastName,
                id:user._id
             }
        })
        res.json({
            x
        })  
    } catch(err) {
        res.status(500).json({
            message:err
        })
    }
    
})

module.exports=router;
