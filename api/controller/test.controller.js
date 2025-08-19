import jwt from 'jsonwebtoken'

export const logged_in=(req,res)=>{
    console.log(req.userId)

    res.status(200).json({message:"You are Authenticated"})// check user id if it is correct we can delete the posts

}
export const Admin=(req,res)=>{
    const token=req.cookies.token
    if(!token) return res.status(401).json({message:"User is not Authenticated"})

    jwt.verify(token,process.env.JWT_SECRET ,async(err,payload)=>{
    if(err) return res.status(403).json({message:"Token is not Valid"})
    if(!payload.isAdmin) return res.status(401).json({message:"User not Authenticated"})
        res.status(200).json({message:"You are Authenticated"})
});
}