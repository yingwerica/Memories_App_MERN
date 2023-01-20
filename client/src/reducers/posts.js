//import constants, easier to debug misspellings
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
//the state here is posts
export default (posts =[], action) => {
    switch(action.type) {
        case DELETE:
             //filter out the one deleted
            return posts.filter((post) => post._id !== action.payload)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
            // update and like will do the same thing
        case UPDATE:
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
}