import express from 'express'
import {
  deleteUser,
  dislikeVideo,
  findUserInfo,
  likeVideo,
  subChannel,
  unsubChannel,
  updateUserInfo,
} from '../controllers/user.js'
import { verifyToken } from '../helpers/verifyToken.js'
const router = express.Router()

//Update user
router.put('/:userId', verifyToken, updateUserInfo)
//Delete user
router.delete('/:userId', verifyToken, deleteUser)
//Get user
router.get('/find/:userId', findUserInfo)
//Subscribe to a channel
router.put('/subscribe/:userId', verifyToken, subChannel)
//Unsub
router.put('/unsubscribe/:userId', verifyToken, unsubChannel)
//Like a video
router.put('/like/:videoId', verifyToken, likeVideo)
//Dislike a video
router.put('/dislike/:videoId', verifyToken, dislikeVideo)

export default router
