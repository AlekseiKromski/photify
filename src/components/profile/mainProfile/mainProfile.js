import React, {Component} from 'react';
import Classes from './mainProfile.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCheck, faUserPlus, faPencil} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {connect} from "react-redux";
import Button from "../../UI/Button/Button";
import {logout} from "../../../store/actions/userAction";
class MainProfile extends Component {
    render() {
        return (
            <div>
                <div className={Classes.profile}>
                    <FontAwesomeIcon className={Classes.edit} icon={faPencil}></FontAwesomeIcon>
                    <div className={Classes.profileImage} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <h1>#{this.props.user.nickname}</h1>
                    <p>{this.props.user.description}</p>
                    <div className={Classes.stat}>
                        <div className={Classes.statBlock}>
                            <FontAwesomeIcon className={Classes.icon} icon={faUserCheck}></FontAwesomeIcon>
                            <span>{this.props.user.followers.length}</span>
                        </div>
                        <div className={Classes.statBlock}>
                            <FontAwesomeIcon className={Classes.icon} icon={faUserPlus}></FontAwesomeIcon>
                            <span>{this.props.user.followed.length}</span>
                        </div>
                        <div className={Classes.statBlock}>
                            <FontAwesomeIcon className={Classes.icon} icon={faInstagram}></FontAwesomeIcon>
                            <span>{this.props.user.posts.length}</span>
                        </div>
                    </div>
                </div>
                {
                    this.props.logginedUser._id == this.props.user._id ? <div className="" style={{marginTop: "16px"}}>
                        <Button clickHandler={() => this.props.logout()} loader={false} text={'logout'}></Button>
                    </div> : ""
                }

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        logginedUser: state.user.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainProfile);
