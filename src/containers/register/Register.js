import React, {Component} from 'react';
import Classes from './Register.module.css'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button/Button'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div className={Classes.registerBlock}>
                <div className={Classes.registerBockWrapper}>
                    <FontAwesomeIcon icon={faInstagram} className={Classes.icon}/>
                    <h1>Photify</h1>
                    <div className={Classes.inputs}>
                        <Input setText={() => {}} label="Login"/>
                        <Input setText={() => {}} label="Password" type="password"/>
                        <Input setText={() => {}} label="Password confirmation" type="password"/>
                        <Button text="Sign up"/>
                    </div>
                    <Link className={Classes.signIn} to={'/login'}>You already have account? </Link>
                </div>
            </div>
        );
    }
}

export default Register;