import axios from 'axious';

//this is the URL pointing to our backend route, as it simply returns all the posts we have in the database
const url = 'http://localhost:5001/posts';

export const fetchPosts = () => axios.get(url);