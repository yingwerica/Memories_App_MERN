//import constants, easier to debug misspellings
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

//import all the actions from the api, like fetchPosts
import * as api from '../api';

//thunk action creators to generate thunk function that is dispatched---redux, using thunk 
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        //dispatch action to store instance
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error);
        
    }    
}

export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
};

//similar to updatePost
export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };