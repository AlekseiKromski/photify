import './App.css';
import {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import MainLayout from './hoc/layout/MainLayout';
import Main from './containers/main/main';
import Chat from './containers/chat/Chat'
//containers (pages)

class App extends Component{
  render(){
    return (
      <MainLayout>
        <Routes>
            <Route path={'/'} element={<Main/>}></Route>
            <Route path={'/chat'} element={<Chat/>}></Route>
        </Routes>
      </MainLayout>
    )
  }
}

export default App;
