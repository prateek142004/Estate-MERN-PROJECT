import express from 'express'
import { login, logout, register } from '../controller/auth.controller.js'
const AuthRoute=express()

AuthRoute.post('/register',register)

AuthRoute.post('/login',login)

AuthRoute.post('/logout',logout)

export default AuthRoute;