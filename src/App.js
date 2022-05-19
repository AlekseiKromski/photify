import './App.css';
import {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import MainLayout from './hoc/layout/MainLayout';
import Main from './containers/main/main';
import Chat from './containers/chat/Chat'
import CreatePost from "./containers/createPost/createPost";
import Profile from './containers/profile/Profile'
//containers (pages)

class App extends Component{
  render(){
    return (
      <MainLayout>
        <Routes>
            <Route path={'/'} element={<Main/>}></Route>
            <Route path={'/chat'} element={<Chat/>}></Route>
            <Route path={'/create-post'} element={<CreatePost/>}></Route>
            <Route path={'/profile'} element={<Profile/>}></Route>
        </Routes>
      </MainLayout>
    )
  }
}

export default App;
