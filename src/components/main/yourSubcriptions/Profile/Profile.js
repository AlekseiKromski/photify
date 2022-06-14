import {Component} from "react";
import Classes from './Profile.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCheck} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
class Profile extends Component{
    render(){
        return (
            <div className={Classes.main}>
                <div className={Classes.profileImage} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                <NavLink to={'/profile/' + this.props.profile._id} className={Classes.profileDescription}>
                    <div>
                        <h1>{this.props.profile.nickname}</h1>
                        <p>{this.props.profile.description}</p>
                    </div>
                    <FontAwesomeIcon className='followed' style={{width: 16, height:16}} icon={faUserCheck}/>
                </NavLink>
            </div>
        )
    }
}

export default Profile;
