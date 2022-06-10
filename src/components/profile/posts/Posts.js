import React, {Component} from 'react';
import Classes from './Posts.module.css'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts: []
        }
    }

    componentDidMount() {
        let posts_ = []
        if(this.props.posts.length > 3){
            let postBuffer = [];
            let i = 0;
            for(let post of this.props.posts){
                if( i == 3){
                    i = 0;
                    posts_.push(postBuffer)
                    postBuffer = [];
                }
                postBuffer.push(post)
                i++;
            }
            posts_.push(postBuffer)
        }else{
            posts_.push([...this.props.posts])
        }
        this.setState({posts: posts_})
    }

    render() {
        return (
            <div className={Classes.posts}>
                <h1>Posts</h1>
                {
                    this.state.posts.length !== 0 ? this.state.posts.map(post => {
                        let render;
                        if(this.state.posts.length > 1){
                            render = (
                                <div className={Classes.postRow} style={post.length < 3 ? {marginTop: '70px'} : null}>
                                    {
                                        post.map(post_ => {
                                            return (
                                                <div className={Classes.post} style={{background: "url('" + post_.image +"')"}}></div>

                                            )
                                        })
                                    }
                                </div>
                            )
                        }else{
                            render = (
                                <div className={Classes.postRow}>
                                    {
                                        post.map(post_ => {
                                            return (
                                                <div className={Classes.post} style={{background: "url('" + post_.image +"')"}}></div>

                                            )
                                        })
                                    }
                                </div>
                            )
                        }

                        return render
                    }) : <div className={Classes.noPosts}>
                        <img style={{width: "80%", display: "block"}} src={'/img/posts/no_post2.jpg'} />
                        <NavLink className={Classes.tryCreatePost} to={"/create-post"}>It's time to create your first post!</NavLink>
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.user.user.posts
    }
}
export default connect(mapStateToProps, null)(Posts);
