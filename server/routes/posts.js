import express from 'express'
import { getPosts, createPost } from '../controllers/posts.js'

//setting up router
const router = express.Router()
//setting routes
router.get('/', getPosts)
router.post('/', createPost)

export default router