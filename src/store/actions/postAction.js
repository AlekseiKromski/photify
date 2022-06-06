import axios from "axios";
import {POSTS_GET} from "./actionTypes";

export function getPosts(dispatch){
    return async dispatch => {
        let posts = await axios.get('/api/post/get-all-posts')
        dispatch({
            type: POSTS_GET,
            payload: posts.data
        })
    }
}