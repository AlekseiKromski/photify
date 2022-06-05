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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loader: false,
            bigEffectTrigger: true
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
        this.setState({loader: true})
        return await axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            this.props.loginDispatch(response.data);

            this.setState({loader: false})

        }).catch(e => {
            this.setState({loader: false, hide: true})
            return new Promise((resolve, reject) => {reject('hide')});
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
                        <Button bigEffect={true} loader={this.state.loader}  clickHandler={() => this.clickHandler()} text="sign in"/>
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