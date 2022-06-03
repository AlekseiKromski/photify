import React, {Component} from 'react';
import Classes from './Button.module.css'
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bigEffectRun: false

        }
    }
    buttonHandler(){
        if(this.props.bigEffect){
            this.setState({
                bigEffectRun: true
            })

        }else{
            this.props.clickHandler();
        }


    }
    render() {
        return (
            <div className={Classes.buttonWrapper}>
                <div className={this.state.bigEffectRun ? Classes.bigEffect : ""}><div className={[Classes.bigEffectLoader, this.state.bigEffectRun ? Classes.show : ""].join(" ")}></div></div>
                <button onClick={() => {this.buttonHandler()}} className={Classes.button}>
                    {this.props.loader ? <div className={Classes.loader}></div> : this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;