import express from 'express';

import {getPosts, createPosts} from '../controllers/posts.js';

// simple express router to handle HTTP GET requests to the root path(/) and responds with the msg 
// express routers allow you to create modular, mountable route handlers
const router = express.Router();


// http://localhost:5001/posts

// this defines a route that listens for HTTP GET requests to the root path(/)
router.get('/', getPosts);
router.post('/', createPosts);

export default router;