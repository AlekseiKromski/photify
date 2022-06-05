import React, {Component} from 'react';
import Classes from './Input.module.css'
class Input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.props.setText(this.inputRef.current.value)
    }

    render() {
        return (
            <div className={Classes.inputBlock}>
                {this.props.label ? <label>{this.props.label}</label> : null}
                <input
                    ref={this.inputRef}
                    value={this.props.text}
                    onChange={(event) => {
                        this.props.setText(event.target.value)
                    }}
                    type={this.props.type ? this.props.type : "text"}
                    className={[Classes.input, this.props.error ? Classes.error : " "].join(" ")}/>
            </div>

        );
    }
}

export default Input;
