import jwt from 'jsonwebtoken'
import { setError } from './error.js'

export const verifyToken = (req, res, next) => {
  const reqToken = req.cookies['access_token']
  if (!reqToken) return next(setError('User is not authenticated !'))

  try {
    const verifiedUser = jwt.verify(reqToken, process.env.JWT)
    req.user = verifiedUser
    next()
  } catch (error) {
    next(setError(error.message))
  }
}
