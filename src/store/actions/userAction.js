import {USER_LOGIN, USER_LOGOUT, USER_UPLOAD_POST} from "./actionTypes";
//User and token for payload
export function login(user){
    // eslint-disable-next-line no-unused-expressions
    user ? window.localStorage.setItem('user', JSON.stringify(user)) : null
    return {
       type: USER_LOGIN,
       payload: {
           user
       }
    }
}

export function logout(){
    window.localStorage.removeItem('user');
    return {
        type: USER_LOGOUT,
        payload: null
    }
}

export function uploadPostToUser(post){

    return {
        type: USER_UPLOAD_POST,
        payload: post
    }
}