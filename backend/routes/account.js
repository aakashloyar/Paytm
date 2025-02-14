const express=require('express')
const router=express.Router();
const {User,Account}=require('../db/index.js')
const zod=require('zod');
const jwt=require('jsonwebtoken');
const authMiddleware = require('./middleware.js');
const mongoose=require('mongoose');
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;

router.get('/balance',authMiddleware,async (req,res)=>{
    try{
        const account=await Account.findOne({
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
router.post('/transfer',authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();
    try{
        session.startTransaction();
        const { amount, to } = req.body;
    
        // Fetch the accounts within the transaction
        const account = await Account.findOne({ userId: req.userId }).session(session);
    
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }
    
        const toAccount = await Account.findOne({ userId: to }).session(session);
    
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }
    
        // Perform the transfer
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
    
        // Commit the transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
    } catch(err) {
        await session.abortTransaction();
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
    finally {
        session.endSession();
    }
    
})

module.exports=router;