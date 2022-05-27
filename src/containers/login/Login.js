import React, {Component} from 'react';
import Classes from './Login.module.css'
class Login extends Component {
    render() {
        let test = Array.from({length: 100}, () => Math.floor(Math.random() * 40));
        return (
            <div className={Classes.lightBallBg}>
                {test.map(el => <div style={

                    {
                        'left': Math.random() * 1000,
                        'animation': 'toTop '+ (Math.random() * (20 - 10) + 10) +'s ease-in infinite',
                        transform: 'translateY('+(Math.random() * (600 - 10) + 10)+'px)',
                        background: el % 2 !== 0 ? '#de425b' : '#080036',
                        boxShadow: '0px 0px 6px 0px ' +(el % 2 !== 0 ? '#de425b' : '#080036')

                }
                } className={Classes.lightBall}></div>)}
            </div>
        );
    }
}

export default Login;