import {POST_CREATE, POSTS_GET, SET_COMMENT} from '../actions/actionTypes';

const initialState = {
    posts: [],
    alreadyInit: false
}

export default function userReducer(state = initialState,action){
    switch (action.type){
        default:
            return state;
            break;
        case POSTS_GET:
            return {
                posts: [...action.payload],
                alreadyInit: true
            }
            break;
        case SET_COMMENT:
            let posts = state.posts.map(post => {
                if(post._id == action.payload.postId){

                    post.comments.push(action.payload.data);
                }
                return post
            })

            return {
                posts: [...posts],
                alreadyInit: true
            }
            break;
    }
}