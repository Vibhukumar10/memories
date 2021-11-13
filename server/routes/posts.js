import express from 'express'
const router = express.Router()

//imports from controllers:
import { getPosts } from '../controllers/posts.js'
import { createPost } from '../controllers/posts.js'

router.get('/', getPosts)
router.post('/', createPost)

export default router
