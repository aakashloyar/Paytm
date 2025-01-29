const express=require('express')
const router=express.Router();
const {User,Account}=require('../db/index.js')
const zod=require('zod');
const jwt=require('jsonwebtoken');
const authMiddleware = require('./middleware.js');
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;

router.get('\balance',authMiddleware,(req,res)=>{
    try{
        const account=Account.findOne({
            userId:req.userId
        })
    
        res.status(200).json({
            balance:account.balance
        })
    }catch(err) {
        res.status(500).json({
            message:err
        })
    }
    
})

module.exports=router;