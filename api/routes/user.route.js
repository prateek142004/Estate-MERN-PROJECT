import express from "express"
import { getUsers,getUser,updateUser,deleteUser,savePost,profilePosts } from "../controller/user.controller.js"
import { verifyToken } from "../middleware/verifyToken.js"


const userRoute=express.Router()

userRoute.get('/',getUsers)
// userRoute.get('/:id',verifyToken,getUser)
userRoute.put('/:id',verifyToken,updateUser)
userRoute.delete('/:id',verifyToken,deleteUser)
userRoute.post('/save',verifyToken,savePost)
userRoute.get('/profilePosts',verifyToken,profilePosts)

export default userRoute