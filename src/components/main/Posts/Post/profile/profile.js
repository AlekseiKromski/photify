import React, {Component} from "react";
import Classes from './profile.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCheck} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
class Profile extends Component{
    render(){
        return (
            <div className={Classes.profile}>
                <div className={Classes['profile-image']} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}} />
               <div className={Classes['profile-data']}>
                   <div className="">
                       <h1 className={Classes['profile-nickname']}>#{this.props.profile.nickname}</h1>
                       <p className={Classes['profile-description']}>{this.props.profile.description}</p>
                   </div>
                   {this.props.profile._id !== this.props.user._id ? <FontAwesomeIcon className='followed' icon={faUserCheck} /> : null}
               </div>
            </div>
        )
    }
}
const mapToProps = (state) => {
    return {
        user: state.user.user
    }
}
export default connect(mapToProps, null)(Profile);
