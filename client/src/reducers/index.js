//combine multiple reducers
import { combineReducers } from 'redux';

//import reducer
import posts from './posts';

export default combineReducers({
    //here are all the single reducers, right now only posts reducer
    //posts: posts
    posts,
})