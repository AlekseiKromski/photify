import {Component} from "react";
import Classes from './Profile.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCheck} from '@fortawesome/free-solid-svg-icons'
class Profile extends Component{
    render(){
        return (
            <div className={Classes.main}>
                <div className={Classes.profileImage} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                <div className={Classes.profileDescription}>
                    <div >
                        <h1>#milana</h1>
                        <p>Profesional designer</p>
                    </div>
                    <FontAwesomeIcon className='followed' style={{width: 16, height:16}} icon={faUserCheck}/>
                </div>
            </div>
        )
    }
}

export default Profile;
