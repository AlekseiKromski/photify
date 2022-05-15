import React, {Component} from 'react';
import Post from "./Post/Post";
import Classes from './Posts.module.css'
class Posts extends Component{
    render(){
        let posts = [1,2,3,4,5,6]
        return (
            <div className={Classes.posts}>
                {posts.map(post => <Post/>)}
            </div>
        )
    }
}

export default Posts;
