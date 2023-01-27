import express from 'express'
import { getPosts, createPost, updatePost } from '../controllers/posts.js'

//setting up router
const router = express.Router()
//setting routes
router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)//patch is used for updating existing documents...
export default router