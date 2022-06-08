import {POSTS_GET} from '../actions/actionTypes';

const initialState = {
    posts: [],
}

export default function userReducer(state = initialState,action){
    switch (action.type){
        default:
            return state;
            break;
        case POSTS_GET:
            console.log('ee')
            return {
                posts: [...action.payload]
            }
            break;
    }
}