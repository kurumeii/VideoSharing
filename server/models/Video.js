import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: 0,
    },
    dislikes: {
      type: [String],
      default: 0,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Video', VideoSchema)
