import axios from 'axios';

//this is the URL pointing to our backend route, as it simply returns all the posts we have in the database
const url = 'http://localhost:3000/posts';

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);