import {Component} from "react";
import Classes from './comment.module.css';
import {NavLink} from "react-router-dom";

class Comment extends Component{
    render(){
        return (
            <div>
                <NavLink to={'/profile/' + this.props.comment.user._id} className={Classes.commentHeader}>
                    <div className={Classes.profileImg} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}} alt=""/>
                    <div className={Classes.profileData}>
                        <p>{this.props.comment.user.nickname}</p>
                        <span>29.04.22</span>
                    </div>
                </NavLink>
                <div className={Classes.commentFooter}>
                    <p>{this.props.comment.comment}</p>
                </div>
            </div>
        )
    }
}

export default Comment
