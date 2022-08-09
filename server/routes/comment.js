import express from 'express'
import {
  addComment,
  deleteComment,
  editComment,
  fetchAllComment,
} from '../controllers/comment.js'
import { verifyToken } from '../helpers/verifyToken.js'
const router = express.Router()

//Get comment from video
router.get('/:videoId', fetchAllComment)
//Leave a comment
router.post('/', verifyToken, addComment)
//Edit a comment
router.put('/:videoId/comment/:commentId', verifyToken, editComment)
//Delete a comment
router.delete('/:commentId/video/:videoId', verifyToken, deleteComment)

export default router
