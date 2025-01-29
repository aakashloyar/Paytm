const express=require('express');
const router=express.Router();

const userRouter=require('./user')

router.get('/',(req,res)=>{
    res.json("Hi in v1");
})
router.use('/user',userRouter);

module.exports=router;