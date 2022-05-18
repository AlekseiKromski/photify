import React, {Component} from 'react';
import Classes from './chat.module.css'
import Dialogs from '../../components/chat/dialogs/Dialogs'
import ChatComponent from '../../components/chat/chat/ChatComponent'
class Chat extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className={Classes.content}>
                        <Dialogs  />
                        <ChatComponent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
