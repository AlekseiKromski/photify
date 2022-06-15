import './App.css';
import {Component} from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import MainLayout from './hoc/layout/MainLayout';
import LoginLayout from "./hoc/layout/LoginLayout";
import Main from './containers/main/main';
import Chat from './containers/chat/Chat'
import CreatePost from "./containers/createPost/createPost";
import Profile from './containers/profile/Profile'
import Login from './containers/login/Login'
import Register from "./containers/register/Register";
import {connect} from "react-redux";
import {login} from "./store/actions/userAction";
import {initAxios} from "./store/actions/settingsReducer";
import Loader from "./components/UI/Loader/Loader";
class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loader: true
        }
    }
    componentDidMount() {
        //init axios
        this.props.initAxios();
        //Autologin to system if user exist
        let user = JSON.parse(window.localStorage.getItem('user'));
        if(user){
            this.props.loginDispatch(user)
        }else{
            this.props.loginDispatch(null)

        }
        setTimeout(() => {
            this.setState({
                loader: false
            })
        }, 1500)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.loader){
            document.querySelector('body').style.overflow = 'hidden'
        }else{
            document.querySelector('body').style.overflow = 'scroll'

        }
    }

    render(){
        let render = null
        if(this.props.user !== undefined){
            if(this.props.user !== null ){
                render = (
                    <MainLayout>
                        <Routes>
                            <Route path={'/'} element={<Main/>}></Route>
                            <Route path={'/chat'} element={<Chat/>}></Route>
                            <Route path={'/create-post'} element={<CreatePost/>}></Route>
                            <Route path={'/profile/:userId'} element={<Profile/>}></Route>
                            <Route path="*" element={<Navigate to={'/'}/>}/>

                        </Routes>
                    </MainLayout>
                )
            }else {
                render = (
                    <LoginLayout>
                        <Routes>
                            <Route path={'/login'} element={<Login/>}></Route>
                            <Route path={'/register'} element={<Register/>}></Route>
                            <Route path="*" element={<Navigate to={'/login'}/>}/>
                        </Routes>
                    </LoginLayout>
                )

            }
        }else{
            render = ''
        }

        return (
            <div>
                {this.state.loader ? <Loader></Loader> : ""}
                <div style={{'overflow': "hidden"}}>
                    {render}
                </div>
            </div>

        )
  }
}

function mapStateToProps(state){
    return {
        user: state.user.user
    }
}
function mapDispatchToProps(dispatch){
    return{
        loginDispatch: (value) => dispatch(login(value)),
        initAxios: (value) => dispatch(initAxios())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
