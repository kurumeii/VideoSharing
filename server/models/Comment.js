import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
)

export default mongoose.model('Comment', CommentSchema)
