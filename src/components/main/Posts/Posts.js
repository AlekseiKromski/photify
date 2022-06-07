import React, {Component} from 'react';
import Post from "./Post/Post";
import Classes from './Posts.module.css'
import {getPosts} from "../../../store/actions/postAction";
import {connect} from "react-redux";
class Posts extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.posts.length === 0)
    }

    componentDidMount() {
        // eslint-disable-next-line no-unused-expressions
        this.props.posts.length === 0 ? this.props.loadPosts() : null
    }

    render(){
        return (
            <div className={Classes.posts}>
                {this.props.posts.length !== 0 ? this.props.posts.map(post => <Post post={post} key={post}/>) : <div>
                    <img className={Classes.noPost} src="/img/posts/no_post.jpg"/>
                    <p style={{textAlign: "center"}}>No post, try to follow by someone </p>
                </div>}
            </div>
        )
    }
}
function dispatchToProps(dispatch){
    return {
        loadPosts: () => dispatch(getPosts())
    }
}
function stateToProps(state){
    return {
        posts: state.post.posts
    }
}
export default connect(stateToProps, dispatchToProps)(Posts);
