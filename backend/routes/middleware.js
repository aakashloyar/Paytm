const express=require('express');
const jwt=require('jsonwebtoken')
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;

const authMiddleware=(req,res,next)=>{
    const authHeader=req.header.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message:'Unauthorized'
        });
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        req.userid=decoded.userid;
        next();
    } catch(err) {
        res.sendStatus(403).json({
            message:"Not authorized"   
        })
    }

}
module.exports=authMiddleware;
