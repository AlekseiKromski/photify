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
                    <Profile profile={this.props.post.user}/>
                    <Description description={this.props.post.description}/>
                    <Comments/>

                </div>
                <div className={Classes.postRight}>
                    <img className={Classes.postImage} src={this.props.post.image} alt=""/>
                </div>
            </div>
        )
    }
}

export default Post;
