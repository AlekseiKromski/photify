import React, {Component} from 'react';
import Classes from './dialogs.module.css'
import Dialog from "./dialogs/dialog";
class Dialogs extends Component {
    render() {
        return (
            <div className={Classes.dialogs}>
                <h1>Your chats</h1>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
            </div>
        );
    }
}

export default Dialogs;
