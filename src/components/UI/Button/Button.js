import React, {Component} from 'react';
import Classes from './Button.module.css'
class Button extends Component {
    constructor(props) {
        super(props);
        this.bigEffectReference = React.createRef();
        this.state = {
            bigEffectRun: false
        }
    }
    buttonHandler(){
        if(this.props.bigEffect){
            this.setState({
                bigEffectRun: true
            })

            this.bigEffectReference.current.addEventListener('animationend', (event) => {
                //We have 2 animations: spin and bigEffect.
                // Check, that animation ended in current element
                if(event.target == this.bigEffectReference.current){
                    this.props.clickHandler();
                }
            })

        }else{
            this.props.clickHandler();
        }


    }
    render() {
        return (
            <div className={Classes.buttonWrapper}>
                <div ref={this.bigEffectReference} className={this.state.bigEffectRun ? Classes.bigEffect : ""}><div className={[Classes.bigEffectLoader, this.state.bigEffectRun ? Classes.show : ""].join(" ")}></div></div>
                <button onClick={() => {this.buttonHandler()}} className={Classes.button}>
                    {this.props.loader ? <div className={Classes.loader}></div> : this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;