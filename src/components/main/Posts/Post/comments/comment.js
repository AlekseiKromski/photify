import {Component} from "react";
import Classes from './comment.module.css';

class Comment extends Component{
    render(){
        return (
            <div>
                <div className={Classes.commentHeader}>
                    <div className={Classes.profileImg} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}} alt=""/>
                    <div className={Classes.profileData}>
                        <p>#milana</p>
                        <span>29.04.22</span>
                    </div>
                </div>
                <div className={Classes.commentFooter}>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        )
    }
}

export default Comment
