import {Component} from "react";
import Classes from './Post.module.css';
import Profile from "./profile/profile";
import Description from "./description/description";
import Comments from "./comments/comments";

class Post extends Component{
    render(){
        return (
            <div className={Classes.post}>
                <div className={Classes.postLeft}>
                    <Profile/>
                    <Description/>
                    <Comments/>
                </div>
                <div className={Classes.postRight}>
                    <img className={Classes.postImage} src="/img/posts/fineas-anton-8pKrkO2cx1A-unsplash.jpg" alt=""/>
                </div>
            </div>
        )
    }
}

export default Post;
