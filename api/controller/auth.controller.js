import bcrypt from 'bcrypt'
import prisma from "../lib/prisma.js"
import jwt from 'jsonwebtoken'

export const register=async(req,res)=>{

const {username,email,password}=req.body
    try{

    const hashedpassword=await bcrypt.hash(password,10)

   const newuser =await  prisma.user.create({
    data:{
        username,
        email,
        password:hashedpassword,
    }
   })

   console.log(newuser)
   res.status(201).json({
    message:"user created succesfully"
   })

}catch(err){
    console.log(err)
    res.status(400).json({
        message:"Failed to create user"
    })
}}

export const login= async(req,res)=>{
    const {username,password}=req.body
    try{
        const user= await prisma.user.findUnique({
            where:{username}
        })
        if(!user) return res.status(401).json({message:"Unauthorized user"})

        const ispassword=await bcrypt.compare(password,user.password)
        if(!ispassword) return res.status(401).json({message:"Unauthorized user"})

            const age =1000*60*60*5*24*7

            const token=jwt.sign({
                id:user.id,
                isAdmin:false
            },process.env.JWT_SECRET,{expiresIn:age})

            const {password:userpassword,...userInfo}=user

            res.cookie("token",token,{
                httpOnly:true,
                // secure:true,
            })
            .status(200).json(userInfo)
}
    catch(err){
        console.log(err)
        res.status(401).json({
            message:"Unauthoeized user"
        })
    }

}
export const logout=(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true
    }).status(200).json({message:"Log-Out successful"})

}