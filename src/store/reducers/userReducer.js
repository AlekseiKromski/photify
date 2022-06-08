import {USER_LOGIN, USER_LOGOUT} from '../actions/actionTypes';

const initialState = {
    user: null,
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
            return {
                user: null
            }
            break;
    }
}