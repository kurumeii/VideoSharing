import { setError } from '../helpers/error.js'
import User from '../models/User.js'
import Video from '../models/Video.js'

export const postVideo = async (req, res, next) => {
  const newVideo = new Video({
    ...req.body,
    userId: req.user.id,
  })
  try {
    const savedVideo = await newVideo.save()
    res.json(savedVideo)
  } catch (error) {
    next(error)
  }
}
export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    if (!video) return next(setError('Video is not found'))
    if (req.user.id !== video.userID)
      return next(
        setError(
          'Your action is prohibited ! \n Reason: You can only update your own videos'
        )
      )
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.videoId,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.json(updatedVideo)
  } catch (error) {
    next(error)
  }
}
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    if (!video) return next(setError('Video is not found'))
    if (req.user.id !== video.userID)
      return next(
        setError(
          'Your action is prohibited ! \n Reason: You can only delete your own videos'
        )
      )
    await Video.findByIdAndDelete(req.params.videoId)
    res.json('Video has been deleted')
  } catch (error) {
    next(error)
  }
}
export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    return res.json(video)
  } catch (error) {
    next(error)
  }
}
export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(
      req.params.videoId,
      {
        $inc: { viewCount: 1 },
      },
      { new: true }
    )
    return res.json('The view has been increased')
  } catch (error) {
    next(error)
  }
}
export const getTrending = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 })
    return res.json(videos)
  } catch (error) {
    next(error)
  }
}
export const getDiscovery = async (req, res, next) => {
  try {
    const video = await Video.aggregate([
      {
        $sample: {
          size: 3,
        },
      },
    ])
    return res.json(video)
  } catch (error) {
    next(error)
  }
}
export const getRelated = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
    const subedChannel = user.subscribeChannels
    const list = await Promise.all(
      subedChannel.map(channelId => Video.find({ userId: channelId }))
    )
    res.json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
  } catch (error) {
    next(error)
  }
}
export const search = async (req, res, next) => {
  try {
    const searchKeyword = req.query.keyword
    const videos = await Video.find({
      title: {
        $regex: searchKeyword,
        $options: 'i',
      },
    }).limit(10)
    res.json(videos)
  } catch (error) {
    next(error)
  }
}
export const searchByTags = async (req, res, next) => {
  try {
    const tags = req.query.tags.split(',')
    const videos = await Video.find({
      tags: {
        $in: tags,
      },
    }).limit(10)
    res.json(videos)
  } catch (error) {
    next(error)
  }
}
