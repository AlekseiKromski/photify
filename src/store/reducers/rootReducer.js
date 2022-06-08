import {combineReducers} from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import settingsReducer from './settingsReducer';
export default combineReducers({
    user: userReducer,
    post: postReducer,
    settings: settingsReducer
})