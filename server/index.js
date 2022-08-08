import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.js'
import videoRoute from './routes/video.js'
import commentRoute from './routes/comment.js'
import authRoute from './routes/auth.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000
const CONNECTION_STR = process.env.MONGO

const connectToMongo = () => {
  mongoose
    .connect(CONNECTION_STR)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err))
}
app.use(express.json())
app.use(cookieParser())
//Routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/videos', videoRoute)
app.use('/api/comments', commentRoute)
app.use((err, req, res, next) => {
  const mess = err.message || 'Something weird happened'
  return res.json({ fail: mess })
})
//=====
app.listen(PORT, () => {
  connectToMongo()
  console.log(`Server is running on http://localhost:${PORT}`)
})
