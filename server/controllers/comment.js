import { setError } from '../helpers/error.js'
import Comment from '../models/Comment.js'
import Video from '../models/Video.js'

export const addComment = async (req, res, next) => {
  try {
    const newComment = new Comment({
      ...req.body,
      userId: req.user.id,
    })
    const saved = await newComment.save()
    res.json(saved)
  } catch (error) {
    next(error)
  }
}

export const editComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId)
    const video = await Video.findById(req.params.videoId)
    if (req.user.id !== comment.userId && req.user.id !== video.userId)
      return next(setError('You can only edit your own comments'))
    await Comment.findByIdAndUpdate(
      req.params.commentId,
      {
        $set: {
          commentText: req.body.commentText,
        },
      },
      { new: true }
    )
    return res.json('Comment has been edited')
  } catch (error) {
    next(error)
  }
}

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId)
    const video = await Video.findById(req.params.videoId)
    if (req.user.id !== comment.userId && req.user.id !== video.userId)
      return next(setError('You can only delete your own comments'))
    await Comment.findByIdAndDelete(req.params.commentId)
    return res.json('Comment has been deleted')
  } catch (error) {
    next(error)
  }
}

export const fetchAllComment = async (req, res, next) => {
  try {
    const comments = await Comment.find({
      videoId: req.params.videoId,
    })
    res.json(comments)
  } catch (error) {
    next(error)
  }
}
