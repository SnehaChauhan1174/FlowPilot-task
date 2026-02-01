import express from "express";
import User from "../models/user.js";
const router=express.Router();

router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    const user=new User({name,email,password});
    await user.save();
    res.json({message:'Registered'});

})

export default router;
