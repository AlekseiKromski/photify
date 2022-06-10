import {Component} from "react";
import Classes from './Post.module.css';
import Profile from "./profile/profile";
import Description from "./description/description";
import Comments from "./comments/comments";

class Post extends Component{
    constructor(props) {
        super(props);
        this.props.showComments !== undefined ? this.state = {showComments: this.props.showComments} : this.state ={showComments: true}
    }

    render(){
        return (
            <div className={Classes.post}>
                <div className={Classes.postLeft}>
                    <Profile profile={this.props.post.user}/>
                    <Description description={this.props.post.description}/>
                    {this.state.showComments ? <Comments comments={this.props.post.comments}/> : null}
                </div>
                <div className={Classes.postRight}>
                    <img className={Classes.postImage} src={this.props.post.image} alt=""/>
                </div>
            </div>
        )
    }
}

export default Post;
