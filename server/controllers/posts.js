// writing logic for all the routes from /routes/posts.js in here

import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        // trying to retrieve all the posts that we have in the database
        const postMessages = await PostMessage.find(); // since finding sth takes time, it's an asynchronous action, so we have to add 'await' in front of it
        
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}