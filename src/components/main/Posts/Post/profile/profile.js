import React, {Component} from "react";
import Classes from './profile.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCheck} from '@fortawesome/free-solid-svg-icons'
class Profile extends Component{
    render(){
        return (
            <div className={Classes.profile}>
                <div className={Classes['profile-image']} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}} />
               <div className={Classes['profile-data']}>
                   <div className="">
                       <h1 className={Classes['profile-nickname']}>#milana</h1>
                       <p className={Classes['profile-description']}>Proffesional model</p>
                   </div>
                   <FontAwesomeIcon className='followed' icon={faUserCheck} />
               </div>
            </div>
        )
    }
}

export default Profile;
