import {USER_LOGIN, USER_LOGOUT, USER_UPLOAD_POST} from '../actions/actionTypes';

const initialState = {
    user: undefined,
}

export default function userReducer(state = initialState, action){
    switch (action.type){
        default:
            return state;
            break;
        case USER_LOGIN:
            return {
                ...action.payload
            }
            break;
        case USER_LOGOUT:
            window.location = '/'

            return {
                user: null
            }
            break;
        case USER_UPLOAD_POST:
            let newState = {
                user: {
                    ...state.user,
                    posts: [action.payload,...state.user.posts]
                }
            }
            window.localStorage.setItem('user', JSON.stringify(newState.user))
            return newState;
            break;
    }
}
