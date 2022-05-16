import React, {Component} from 'react';
import Classes from './Input.module.css'
class Input extends Component {
    render() {
        return (
            <input type="text" className={Classes.input}/>
        );
    }
}

export default Input;
