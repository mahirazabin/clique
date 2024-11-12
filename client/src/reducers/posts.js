
// reducer is a function, which accepts the state and action, 
// then based on the action type, then we want to apply some logic here.
// specifying an empty array for our state (i.e posts)
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}