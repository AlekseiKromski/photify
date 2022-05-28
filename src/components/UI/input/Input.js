import React, {Component} from 'react';
import Classes from './Input.module.css'
class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={Classes.inputBlock}>
                {this.props.label ? <label>{this.props.label}</label> : null}
                <input
                    value={this.props.text}
                    onChange={(event) => {
                        this.props.setText(event.target.value)
                    }}
                    type={this.props.type ? this.props.type : "text"}
                    className={Classes.input}/>
            </div>

        );
    }
}

export default Input;
