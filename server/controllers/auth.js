import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { setError } from '../helpers/error.js'
import User from '../models/User.js'
//=====================================
export const signup = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(5)
    const pwHashed = await bcrypt.hash(req.body.password, salt)
    const createNew = new User({ ...req.body, password: pwHashed })
    await createNew.save()
    res.send('User has been created')
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name })
    if (!user) return next(setError('Cannot find the user !'))
    const checkPassword = await bcrypt.compare(req.body.password, user.password)
    if (!checkPassword) return next(setError('You enter wrong password !'))
    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: '3h',
    })
    const { password, ...userInfo } = user._doc
    res.cookie('access_token', token).json(userInfo)
  } catch (error) {
    next(error)
  }
}
