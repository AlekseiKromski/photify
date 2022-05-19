import React, {Component} from 'react';
import Classes from './mainProfile.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCheck, faUserPlus, faPencil} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
class MainProfile extends Component {
    render() {
        return (
            <div className={Classes.profile}>
                <FontAwesomeIcon className={Classes.edit} icon={faPencil}></FontAwesomeIcon>
                <div className={Classes.profileImage} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                <h1>#milana</h1>
                <p>Proffesional designer</p>
                <div className={Classes.stat}>
                    <div className={Classes.statBlock}>
                        <FontAwesomeIcon className={Classes.icon} icon={faUserCheck}></FontAwesomeIcon>
                        <span>43</span>
                    </div>
                    <div className={Classes.statBlock}>
                        <FontAwesomeIcon className={Classes.icon} icon={faUserPlus}></FontAwesomeIcon>
                        <span>43</span>
                    </div>
                    <div className={Classes.statBlock}>
                        <FontAwesomeIcon className={Classes.icon} icon={faInstagram}></FontAwesomeIcon>
                        <span>43</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainProfile;
