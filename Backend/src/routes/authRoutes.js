import express from "express";
import User from "../models/user.js";
const router=express.Router();
import bcrypt from "bcryptjs";

router.post('/register',async(req,res)=>{
    console.log("recieved data:",req.body);
    const {name,email,password} = req.body;
    const user=new User({name,email,password});
    await user.save();
    res.json({message:'Registered'});
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    //find user
    const user=await User.findOne({email});
    if(!user){
        return res.json({message:"user not found"});
    }
    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.json({message:"invalid credentials"});
    }
    //success
    res.json({message:"login successful"});

    
})
export default router;
