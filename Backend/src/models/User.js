import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:["admin","member"],
            default:"member"
        }
    },
    {timestamps:true}
);

userSchema.pre("save",async(next)=>{
    if(!this.isModified('password')){
       return next();
    }
    const saltRounds=10;
    this.password=bcrypt.hash(this.password,saltRounds);
    console.log(this.password);
    next();
    
});
userSchema.methods.comparePassowrd=async function(candPassword){
    return await bcrypt.compare(candPassword,this.password);
}
const User=mongoose.model("User",userSchema);
export default User;//exporting user model