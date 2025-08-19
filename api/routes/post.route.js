import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { getPosts,getPost,addPost,updatePost,deletePost } from '../controller/post.controller.js'
const PostRoute=express.Router()

PostRoute.get('/',getPosts)
PostRoute.get('/:id',getPost)
PostRoute.post('/',verifyToken,addPost)
PostRoute.put('/:id',verifyToken,updatePost)
PostRoute.delete('/:id',verifyToken,deletePost)

export default PostRoute;