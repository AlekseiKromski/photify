import axios from "axios";
import {POSTS_GET} from "./actionTypes";
export function getPosts(dispatch){
    return async (dispatch, getState) => {
        let posts = await getState().settings.axios.get('/post/get-all-posts')
        dispatch({
            type: POSTS_GET,
            payload: posts.data
        })
    }
}
