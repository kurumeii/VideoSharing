import { setError } from '../helpers/error.js'
import User from '../models/User.js'

export const updateUserInfo = async (req, res, next) => {
  if (req.params['userId'] === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params['userId'],
        {
          $set: req.body,
        },
        { new: true }
      )
      res.json(updatedUser)
    } catch (error) {
      next(error)
    }
  } else {
    return next(
      setError(
        'Your action is prohibited \n Reason: You can only update your own account'
      )
    )
  }
}
export const deleteUser = async (req, res, next) => {
  if (req.params['userId'] === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params['userId'])
      res.json('Your account has been deleted')
    } catch (error) {
      next(error)
    }
  } else {
    return next(
      setError(
        'Your action is prohibited \n Reason: You can only delete your own account'
      )
    )
  }
}
export const findUserInfo = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (error) {
    next(error)
  }
}
export const subChannel = async (req, res, next) => {
  try {
    const { name } = await User.findById(req.params.userId)
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribeChannels: req.params.userId },
    })
    await User.findByIdAndUpdate(req.params.userId, {
      $inc: { subscriber: 1 },
    })
    res.json(`Subscribed to ${name}`)
  } catch (error) {
    next(error)
  }
}
export const unsubChannel = async (req, res, next) => {
  try {
    const { name } = await User.findById(req.params.userId)
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribeChannels: req.params.userId },
    })
    await User.findByIdAndUpdate(req.params.userId, {
      $inc: { subscriber: -1 },
    })
    res.json(`Unsubscribed to ${name}`)
  } catch (error) {
    next(error)
  }
}
export const likeVideo = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}
export const dislikeVideo = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}
