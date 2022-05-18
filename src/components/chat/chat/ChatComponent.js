import React, {Component} from 'react';
import Classes from './chat.module.css'
import Header from './header/Header'
import Messages from "./messages/Messages";
import Input from '../../UI/input/Input'
import Send from '../../UI/send/Send'
class ChatComponent extends Component {
    render() {
        return (
            <div className={Classes.chat}>
                <Header/>
                <Messages/>
                <div className={Classes.mock}>

                </div>
                <div className={Classes.send}>
                    <Input/>
                    <Send/>
                </div>
            </div>
        );
    }
}

export default ChatComponent;
