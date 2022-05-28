import React, {Component} from 'react';
import Classes from './Login.module.css'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button/Button'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        let test = Array.from({length: 100}, () => Math.floor(Math.random() * 40));
        return (
            <div className={Classes.lightBallBg}>
                <div className={Classes.loginBlock}>
                   <div className={Classes.loginBockWrapper}>
                       <FontAwesomeIcon icon={faInstagram} className={Classes.icon}/>
                       <h1>Photify</h1>
                       <div className={Classes.inputs}>
                           <Input setText={() => {}} label="Login"/>
                           <Input setText={() => {}} label="Password" type="password"/>
                           <Button text="sign in"/>
                       </div>
                       <Link className={Classes.signUp} to={'/register'}>You don't have account? </Link>
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

export default Login;