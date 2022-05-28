import React, {Component} from 'react';
import Classes from './Login.module.css'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button/Button'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }

    }

    InputHandler(type, value){
        if(type === 'email'){
            this.setState({...this.state, email: value})
        }else{
            this.setState({...this.state, password: value})

        }
    }

    async clickHandler(){
        console.log(this)
        await axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })
    }

    render() {
        return (
            <div className={Classes.loginBlock}>
                <div className={Classes.loginBockWrapper}>
                    <FontAwesomeIcon icon={faInstagram} className={Classes.icon}/>
                    <h1>Photify</h1>
                    <div className={Classes.inputs}>
                        <Input setText={(value) => this.InputHandler('email', value)} label="Login"/>
                        <Input setText={(value) => this.InputHandler('password', value)} label="Password" type="password"/>
                        <Button clickHandler={() => this.clickHandler()} text="sign in"/>
                    </div>
                    <Link className={Classes.signUp} to={'/register'}>You don't have account? </Link>
                </div>
            </div>
        );
    }
}

export default Login;