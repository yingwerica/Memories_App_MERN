import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js' // in Node, we should add.js to the end of files, but not in React

const router = express.Router();

// all the routs here are with prefix '/posts' added from index.js
router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)



export default router;