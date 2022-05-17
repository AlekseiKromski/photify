import React, {Component} from 'react';
import Classes from './Input.module.css'
class Input extends Component {
    render() {
        return (
            <input
                value={this.props.text}
                onChange={(event) => {
                    this.props.setText(event.target.value)
                }}
                onKeyDown={(event) => {if(event.which === 13){this.props.createNewComment()}}}
                type="text" className={Classes.input}/>
        );
    }
}

export default Input;
