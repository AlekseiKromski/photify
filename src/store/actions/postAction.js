import axios from "axios";
import {POSTS_GET, SET_COMMENT} from "./actionTypes";
export function getPosts(dispatch){
    return async (dispatch, getState) => {
        let posts = await getState().settings.axios.get('/post/get-all-posts')
        dispatch({
            type: POSTS_GET,
            payload: posts.data
        })
    }
}
export function setComment(data,dispatch){

    return{
        type: SET_COMMENT,
        payload: data
    }
}