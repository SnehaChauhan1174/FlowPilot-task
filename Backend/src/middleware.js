const isLoggedIn = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"no token"});
    }
    try{
        const decoded = JsonWebTokenError.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        if(err.name==="TokenExipredError"){
            return res.status(401).json({message:"token expired"});
        }
        else return res.status(403).json({message:"token invalid"});
    }
}