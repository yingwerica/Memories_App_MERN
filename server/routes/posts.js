import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js' // in Node, we should add.js to the end of files, but not in React

const router = express.Router();

// all the routs here are with prefix '/posts' added from index.js
router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost) //patch is for updating
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost) //like the post is updating the number of the likes


export default router;