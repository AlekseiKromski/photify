import React, {Component} from 'react';
import Classes from './Register.module.css'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button/Button'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import axios from "axios";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: "",
                password: "",
                password_confirmation: "",
            },
            loader: true,
            trigger: true
        }
    }

    registerInputHandler(inputType, value){
        this.setState({
            ['form']: {...this.state.form, inputType: value}
        })
    }

    registerHandler(){
        this.setState({loader: true, trigger: true})
        axios.post("/api/register", {
            ...this.state.form
        }).then(response => {
            console.log(response.data)
            this.setState({loader: false})

        }).catch(e => {
            console.log(e)
            this.setState({loader: false})

        })
    }

    render() {
        return (
            <div className={Classes.registerBlock}>
                <div className={Classes.registerBockWrapper}>
                    <FontAwesomeIcon icon={faInstagram} className={Classes.icon}/>
                    <h1>Photify</h1>
                    <div className={Classes.inputs}>
                        <Input setText={(value) => {this.registerInputHandler('email', value)}} label="Login"/>
                        <Input setText={(value) => {this.registerInputHandler('password', value)}} label="Password" type="password"/>
                        <Input setText={(value) => {this.registerInputHandler('password_confirmation', value)}} label="Password confirmation" type="password"/>
                        <Button bigEffectTrigger={this.state.trigger} bigEffect={true} loader={this.state.loader} clickHandler={() => {this.registerHandler()}} text="Sign up"/>
                    </div>
                    <Link className={Classes.signIn} to={'/login'}>You already have account? </Link>
                </div>
            </div>
        );
    }
}

export default Register;