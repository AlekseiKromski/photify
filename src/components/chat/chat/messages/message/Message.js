import React, {Component} from 'react';
import Classes from './message.module.css'
class Message extends Component {
    render() {

        let message = [Classes.message];
        if(this.props.who === 'me'){
            message.push(Classes.me)
        }else{
            message.push(Classes.friend)

        }

        return (
            <div className={message.join(' ')}>
                test
                <span className={Classes.time}>19:50</span>
            </div>
        );
    }
}

export default Message;
