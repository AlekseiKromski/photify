import React, {Component} from 'react';
import Classes from './Login.module.css'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button/Button'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import axios from 'axios';
import {login} from '../../store/actions/userAction';
import {connect} from "react-redux";
import Notification from "../../components/UI/Notification/Notification";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loader: false,
            errors: {
                show: false,
                text: "",
                type: "error",
            }
        }

    }
    clearError() {
        this.setState({
            errors: {
                show: false,
                text: "",
                type: "error",
            }
        })
    }
    InputHandler(type, value){
        if(type === 'email'){
            this.setState({...this.state, email: value})
        }else{
            this.setState({...this.state, password: value})

        }
    }

    clickHandler(){
        this.setState({loader: true})
        axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            this.props.loginDispatch(response.data);

            this.setState({loader: false})

        }).catch(e => {
            setTimeout( () => {
                this.setState({loader: false})
            }, 1500)
            this.setState({'errors': {show: true,text: e.response.data.message,type: "error"}});
        })
    }

    render() {
        return (
            <div className={Classes.loginBlock}>
                <div className={Classes.loginBockWrapper}>
                    { this.state.errors.show ? <Notification type={Classes.loginBlockError} text={this.state.errors.text}  /> : ""}
                    <FontAwesomeIcon icon={faInstagram} className={Classes.icon}/>
                    <h1>Photify</h1>
                    <div className={Classes.inputs}>
                        <Input setText={(value) => this.InputHandler('email', value)} label="Login"/>
                        <Input setText={(value) => this.InputHandler('password', value)} label="Password" type="password"/>
                        <Button loader={this.state.loader} clickHandler={() => !this.state.loader ? this.clickHandler() : ""} text="Sign in"/>

                    </div>
                    <Link className={Classes.signUp} to={'/register'}>You don't have account? </Link>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        loginDispatch: (value) => dispatch(login(value))
    }
}

export default connect(null, mapDispatchToProps)(Login);