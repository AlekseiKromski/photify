import {USER_LOGIN,USER_LOGOUT} from "./actionTypes";
//User and token for payload
export function login(user){
    window.localStorage.setItem('user', JSON.stringify(user))
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
