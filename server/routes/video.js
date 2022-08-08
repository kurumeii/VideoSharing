import express from 'express'
import { postVideo } from '../controllers/video.js'
import { verifyToken } from '../helpers/verifyToken.js'
const router = express.Router()

//Post a video
router.post('/', verifyToken, postVideo)

export default router
