import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt"


//fetch all users
export const getUsers=async(req,res)=>{
    try{
        const users=await prisma.user.findMany()
    res.status(200).json(users)
    }catch(err)
    {
        console.log(err)
        res.status(500).json({message:"Failed to get users"})
    }
}


//fetch a unique user

export const getUser=async(req,res)=>{
    const id=req.params.id
    try{
        const user=await prisma.user.findUnique({
            where:{id},
        })
    res.status(200).json(user)

    }catch(err)
    {
        console.log(err)
        res.status(500).json({message:"Failed to get user"})
    }
}



//update user

export const updateUser=async(req,res)=>{
    const id=req.params.id
    const tokenUser=req.userId
    const {password,avatar,...inputs}=req.body

    if(id!=tokenUser) {
        return res.status(403).json({message:"User is not Authenticated"})
    }
    let updatedpassword=null
    try{
        if(password)
        {
            updatedpassword=await bcrypt.hash(password,10)
        }
        const updateUser=await prisma.user.update({
            where:{id},
            data:{...inputs,
                ...(updatedpassword && {password:updatedpassword}),
                ...(avatar && {avatar})
            },
        })
        res.status(200).json(updateUser)

    }catch(err)
    {
        console.log(err)
        res.status(500).json({message:"Failed to Update user"})
    }
}



//delete user
export const deleteUser=async(req,res)=>{

    const id=req.params.id
    const tokenUser=req.userId

    if(id!=tokenUser) {
        return res.status(403).json({message:"User is not Authenticated"})
    }
    try{
        await prisma.user.delete({
            where:{id}
        })
        res.status(200).json({message:"User deleted"})
    }catch(err)
    {
        console.log(err)
        res.status(500).json({message:"Failed to delete user"})
    }
}



export const savePost=async(req,res)=>{

    const postId=req.body.postId
    const tokenUserId=req.userId
    try{
       const savePost=await prisma.savedPost.findUnique({
        where:{
            userId_postId:{
                userId:tokenUserId,
                postId
            }
        }
       })
       if(savePost){
        await prisma.savedPost.delete({
            where:{
                id:savePost.id,
            }
        })
        res.status(200).json({message:"Post removed from Saved list"})
       }
       else{
        await prisma.savedPost.create({
            data:{
                userId:tokenUserId,
                postId
            }
        })
        res.status(200).json({message:"Post Saved"})
       }

    }catch(err)
    {
        console.log(err)
        res.status(500).json({message:"Failed to Save Post"})
    }
}

export const profilePosts=async(req,res)=>{

    const tokenUserId=req.userId

    try{
        const userPosts = await prisma.post.findMany({
            where:{
                userId:tokenUserId
            }
        })
        const saved = await prisma.savedPost.findMany({
            where:{
                userId:tokenUserId
            },
            include:{
                post:true
            }
        })
        const savedPost=saved.map(item=>item.post)
        res.status(200).json({userPosts,savedPost})

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to get Profile Post"})
    }
}