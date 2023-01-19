import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js' // in Node, we should add.js to the end of files, but not in React

const router = express.Router();

// all the routs here are with prefix '/posts' added from index.js
router.get('/', getPosts)
router.post('/', createPost)
router.get('/', getPosts)
router.get('/', getPosts)
router.get('/', getPosts)


export default router;