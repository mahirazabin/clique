import { combineReducers } from "redux";

import posts from './posts';

export default combineReducers({
    // considering both the key and the value are the same
    // we can keep only one:
    // posts: posts,
    posts,
})