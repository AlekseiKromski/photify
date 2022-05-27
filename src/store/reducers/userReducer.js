import {USER_LOGIN} from '../actions/actionTypes';

const initialState = {
    user: null
}

export default function userReducer(state = initialState, action){
    switch (action.type){
        default:
            return state;
            break;
        case USER_LOGIN:
            return {
                ...state
            }
            break;
    }
}