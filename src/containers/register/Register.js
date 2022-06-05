import React, {Component} from 'react';
import Classes from './Register.module.css'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button/Button'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import axios from "axios";
import Notification from "../../components/UI/Notification/Notification";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: {
                    error: false,
                    value: ""
                },
                password: {
                    error: false,
                    value: ""
                },
                password_confirmation: {
                    error: false,
                    value: ""
                },
            },
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
    registerInputHandler(inputType, value){
        this.setState({
            form: {...this.state.form, [inputType]: {...this.state.form[inputType], value: value}}
        })
    }

    registerHandler(){
        this.clearError();
        this.setState({loader: true})
        return axios.post("/api/register", {
            email: this.state.form.email.value,
            password: this.state.form.password.value,
            password_confirmation: this.state.form.password_confirmation.value,
        }).then(response => {
            this.setState({loader: false})

        }).catch(e => {
            this.setState({loader: false, hide: true})
            let errors = 0
            for(let formItem of Object.keys(this.state.form)){
                if(this.state.form[formItem].value === ''){
                    this.state.form[formItem].error = true;
                    errors ++;
                }else{
                    this.state.form[formItem].error = false;

                }
            }
            this.setState({'errors': {show: true,text: e.response.data.message,type: "error"}});

            return new Promise((resolve, reject) => {
                reject('hide')

            });
        })
    }


    render() {
        return (
            <div className={[Classes.registerBlock].join(" ")}>
                <div className={Classes.registerBockWrapper}>
                    <FontAwesomeIcon icon={faInstagram} className={Classes.icon}/>
                    <h1>Photify</h1>
                    { this.state.errors.show ? <Notification type={Classes.registerBlockError} text={this.state.errors.text}  /> : ""}
                    <div className={Classes.inputs}>
                        <Input error={this.state.form.email.error} setText={(value) => {this.registerInputHandler('email', value)}} label="Login"/>
                        <Input error={this.state.form.password.error} setText={(value) => {this.registerInputHandler('password', value)}} label="Password" type="password"/>
                        <Input error={this.state.form.password_confirmation.error} setText={(value) => {this.registerInputHandler('password_confirmation', value)}} label="Password confirmation" type="password"/>
                        <Button bigEffect={true} loader={this.state.loader} clickHandler={() => this.registerHandler()} text="Sign up"/>
                    </div>
                    <Link className={Classes.signIn} to={'/login'}>You already have account? </Link>
                </div>
            </div>
        );
    }
}

export default Register;