import express from 'express'
import { login, signup } from '../controllers/auth.js'
const router = express.Router()

//Create user
router.post('/signup', signup)
//Log in
router.post('/login', login)
//Others providers (?)

export default router
