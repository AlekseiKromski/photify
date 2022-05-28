import React, {Component} from 'react';
import Classes from './Register.module.css'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button/Button'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class Register extends Component {
    render() {
        let test = Array.from({length: 100}, () => Math.floor(Math.random() * 40));
        return (
            <div className={Classes.lightBallBg}>
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
                <div className={Classes.lightBallBlock}>
                    {test.map(el => <div style={

                        {
                            'left':  (Math.random() * (window.innerWidth - 0) + 0),
                            'animation': 'toTop '+ (Math.random() * (30 - 10) + 10) +'s ease-in infinite',
                            transform: 'translateY('+(Math.random() * (600 - 100) + 100)+'px)',
                            background: el % 2 !== 0 ? '#de425b' : '#080036',
                            boxShadow: '0px 0px 6px 0px ' +(el % 2 !== 0 ? '#de425b' : '#080036')

                        }
                    } className={Classes.lightBall}></div>)}
                </div>
            </div>
        );
    }
}

export default Register;