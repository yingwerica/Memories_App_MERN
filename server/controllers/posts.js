import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();//find data needs time, so it should be async. use async... await...
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body; // data of post sent from frontend
    const newPost = new PostMessage(post);
    try {
        await newPost.save();//save data needs time, so async
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}