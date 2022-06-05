import React, {Component} from 'react';
import Classes from './Notification.module.css'
class Notification extends Component {
    render() {
        return (
            <div className={[Classes.notification, this.props.type].join(" ")}>
                {this.props.text}
            </div>
        );
    }
}

export default Notification;