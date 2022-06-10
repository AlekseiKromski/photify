import {SET_AXIOS} from "./actionTypes";
import axios from 'axios'
import {logout} from "./userAction";
//User and token for payload
export function initAxios(dispatch){
    let instance = axios.create({
        baseURL: "http://localhost:3000/api/"
    })
    instance.interceptors.response.use((response) => {
        return response
    }, (e) => {
        if(e.response.status == 403){
            dispatch(logout())
        }
    })

    return {
        type: SET_AXIOS,
        payload: instance
    }

}

