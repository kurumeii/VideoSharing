import express from 'express'
import {
  addView,
  deleteVideo,
  getDiscovery,
  getRelated,
  getTrending,
  getVideo,
  postVideo,
  search,
  searchByTags,
  updateVideo,
} from '../controllers/video.js'
import { verifyToken } from '../helpers/verifyToken.js'
const router = express.Router()

//Post a video
router.post('/', verifyToken, postVideo)
//Update a video
router.put('/:videoId', verifyToken, updateVideo)
//Delete a video
router.delete('/:videoId', verifyToken, deleteVideo)
//Get a video
router.get('/find/:videoId', getVideo)
//Update view
router.put('/view/:videoId', addView)
//Trending videos
router.get('/trending', getTrending)
//Random videos
router.get('/discovery', getDiscovery)
//related videos
router.get('/related', verifyToken, getRelated)
//Search for a video
router.get('/searching', search)
//Search by tags
router.get('/tags', searchByTags)

export default router
