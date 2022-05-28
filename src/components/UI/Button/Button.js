import React, {Component} from 'react';
import Classes from './Button.module.css'
class Button extends Component {
    render() {
        return (
            <button onClick={this.props.clickHandler} className={Classes.button}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;