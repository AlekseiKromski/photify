import {USER_LOGIN} from "./actionTypes";

//User and token for payload
export function login({user, token}){
    window.localStorage.setItem('user', JSON.stringify({user,token}))
    return {
       type: USER_LOGIN,
       payload: {
           user, token
       }
    }
}
