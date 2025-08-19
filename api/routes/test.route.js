import express from 'express'
import { logged_in ,Admin} from '../controller/test.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'
const TestRoute=express.Router()

TestRoute.post("/logged_In",verifyToken,logged_in)
TestRoute.post("/admin", Admin)

export default TestRoute;