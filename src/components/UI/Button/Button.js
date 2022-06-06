import React, {Component} from 'react';
import Classes from './Button.module.css'
class Button extends Component {

    buttonHandler(){
        this.props.clickHandler();
    }

    render() {
        return (
            <div className={Classes.buttonWrapper}>
                <button onClick={() => {this.buttonHandler()}} className={Classes.button}>
                    {this.props.loader ? <div className={Classes.loader}></div> : this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;