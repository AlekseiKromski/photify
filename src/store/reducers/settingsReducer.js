import {SET_AXIOS} from '../actions/actionTypes';

const initialState = {
    axios: null,
}

export default function userReducer(state = initialState, action){
    switch (action.type){
        case SET_AXIOS:
            return {
                axios: {...action.payload}
            }
            break;
        default:
            return state;
            break;
    }
}