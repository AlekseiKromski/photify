import React, {Component} from 'react';
import Classes from './dialog.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCheck} from "@fortawesome/free-solid-svg-icons";
class Dialog extends Component {
    render() {
        return (
            <div className={[Classes.dialog, Classes.active].join(' ')}>
                <div className={Classes['profile-image']} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}} />
                <div className={Classes.profile}>
                    <div className={Classes['profile-data']}>
                        <h1 className={Classes['profile-nickname']}>#milana</h1>
                        <p className={Classes['profile-status']}>online</p>
                    </div>
                    <div className={Classes.message}>
                        <span className={Classes.who}>Me:</span> hi, how arre you ?
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;
