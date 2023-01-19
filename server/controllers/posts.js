
import mongoose from 'mongoose';
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

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}