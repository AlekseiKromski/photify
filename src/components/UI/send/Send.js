import React, {Component} from 'react';
import Classes from './Send.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
class Send extends Component {
    render() {
        return (
            <div
                onClick={() => {this.props.createNewComment()}} className={Classes.send}>
                <FontAwesomeIcon style={{color: 'rgba(255, 255, 255, 0.62)'}} icon={faPaperPlane} />
            </div>
        );
    }
}

export default Send;
