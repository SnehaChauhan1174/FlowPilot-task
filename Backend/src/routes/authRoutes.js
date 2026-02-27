import express from "express";
import User from "../models/user.js";
const router=express.Router();
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

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

    //access token
    const accessToken = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "15m"}
    );

    //refresh token
    const refreshToken = jwt.sign(
        {userId: user._id},
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: "7d"}
    );

    //success
    res.json({
        message:"login successful",
        accessToken,
        refreshToken
    });
})

router.post("/refresh",(req,res)=>{
    const {refreshToken}=req.body;
    if(!refreshToken){
        return res.json({message:"No refresh token"});
    }
    try{
        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET
        )
        const newAccessToken = jwt.sign(
            {userId:decoded.userId},
            process.env.JWT_SECRET,
            {expiresIn:"15m"}
        );
        res.json({accessToken:newAccessToken});
    }
    catch(err){
        return res.json({message:"invalid refresh token"});
    }
})
export default router;
