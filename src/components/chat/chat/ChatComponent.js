import React, {Component} from 'react';
import Classes from './chat.module.css'
import Header from './header/Header'
import Messages from "./messages/Messages";
class ChatComponent extends Component {
    render() {
        return (
            <div className={Classes.chat}>
                <Header/>
                <Messages/>
                <div className={Classes.mock}>

                </div>
                <input type="text"/>
            </div>
        );
    }
}

export default ChatComponent;
