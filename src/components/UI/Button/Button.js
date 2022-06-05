import React, {Component} from 'react';
import Classes from './Button.module.css'
class Button extends Component {
    constructor(props) {
        super(props);
        this.bigEffectReference = React.createRef();
        this.state = {
            bigEffectRun: false,
            hide: false
        }
    }


    buttonHandler(){
        if(this.props.bigEffect){
            this.setState({
                bigEffectRun: true
            })
            setTimeout(() => {
                this.props.clickHandler().catch(err => {
                    if(err === 'hide'){
                        this.setState({hide: true})
                    }
                    setTimeout(() => {
                        this.setState({hide: false, bigEffectRun: false})
                    }, 1000)
                })
            }, 2000)

        }else{
            this.props.clickHandler();
        }
    }

    render() {
        return (
            <div className={Classes.buttonWrapper}>
                <div ref={this.bigEffectReference} className={[this.state.bigEffectRun ? Classes.bigEffect : "", this.state.hide ? Classes.hide : ""].join(" ")}>
                    <div className={[Classes.bigEffectLoader, this.state.bigEffectRun ? Classes.show : ""].join(" ")}></div>
                </div>
                <button onClick={() => {this.buttonHandler()}} className={Classes.button}>
                    {this.props.loader ? <div className={Classes.loader}></div> : this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;