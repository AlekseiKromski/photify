import React, {Component} from "react";
import Classes from './description.module.css';

class Description extends Component{
    render(){
        return (
            <div className={Classes.description}>
                <p>
                    {this.props.description}
                </p>
                <span className={Classes.date}>29.04.2022 - </span>
            </div>
        )
    }
}

export default Description;
