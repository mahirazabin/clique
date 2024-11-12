import * as api from '../api'; // * means we import everything from actions as api

// Action Creators - functions that return actions
// action is just an object that has a type and a payload
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}