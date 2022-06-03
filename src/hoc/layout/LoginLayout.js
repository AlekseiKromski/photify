import React, {Component} from 'react';
import Classes from './LoginLayout.module.css'
class LoginLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balls: Array.from({length: 100}, () => Math.floor(Math.random() * 10000)),
            width: window.innerWidth,
            hide: false
        }
    }

    render() {
        return (

            <div>
                <div className={Classes.lightBallBg}>
                    {this.props.children}

                    <div className={[Classes.lightBallBlock, this.state.hide ? Classes.hide : ''].join(' ')}>
                        {this.state.balls.map(el => <div style={

                            {
                                'left':  (Math.random() * (this.state.width + 500 - 0) + 0),
                                'animation': 'toTop '+ (Math.random() * (30 - 10) + 10) +'s ease-in infinite',
                                transform: 'translateY('+(Math.random() * (600 - 100) + 100)+'px)',
                                background: el % 2 !== 0 ? '#de425b' : '#080036',
                                boxShadow: '0px 0px 6px 0px ' +(el % 2 !== 0 ? '#de425b' : '#080036')

                            }
                        } className={Classes.lightBall}></div>)}
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginLayout;