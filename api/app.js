import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import PostRoute from './routes/post.route.js'
import AuthRoute from './routes/auth.route.js'
import testRoute from './routes/test.route.js'
import userRoute from './routes/user.route.js';

const app= express()

app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
app.use(express.json())
app.use(cookieParser())

app.use('/api/posts',PostRoute)
app.use('/api/auth',AuthRoute)
app.use('/api/test',testRoute)
app.use('/api/users',userRoute)

app.listen(3000,()=>{
    console.log("server is listerning to port 3000")
})