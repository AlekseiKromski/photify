import {USER_LOGIN} from "./actionTypes";
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
