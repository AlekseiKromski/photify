import React, {Component} from "react";
import Classes from './profile.module.css';

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
                   <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16"><path d="M9,12A6,6,0,1,0,3,6,6.006,6.006,0,0,0,9,12ZM9,2A4,4,0,1,1,5,6,4,4,0,0,1,9,2Z"/><path d="M9,14a9.011,9.011,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.011,9.011,0,0,0,9,14Z"/><path d="M22,7.875a2.107,2.107,0,0,0-2,2.2,2.107,2.107,0,0,0-2-2.2,2.107,2.107,0,0,0-2,2.2c0,1.73,2.256,3.757,3.38,4.659a.992.992,0,0,0,1.24,0c1.124-.9,3.38-2.929,3.38-4.659A2.107,2.107,0,0,0,22,7.875Z"/></svg>

               </div>
            </div>
        )
    }
}

export default Profile;