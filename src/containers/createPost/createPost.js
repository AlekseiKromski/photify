import React, {Component} from 'react';
import Classes from './createPost.module.css'
import Post from '../../components/main/Posts/Post/Post'
import CreatePostMenu from "../../components/CreatePostMenu/createPostMenu";
import {connect} from "react-redux";
import {uploadPostToUser} from "../../store/actions/userAction";
import {NavLink} from "react-router-dom";
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                "description": "Type something about your photo",
                "image": "",
                "file": null,

                //For work component
                "user": this.props.user,
            },
            loader: false,
            result: 'success',
        }
    }
    forwardState(state){
        for(let fieldName of Object.keys(state)){
            this.setState({
                post: {
                    ...this.state.post,
                    [fieldName]: state[fieldName]
                }
            })
        }
    }
    createPost(){
        if(this.state.post.image != "" && this.state.post.file != null && this.state.post.description != ""){
            this.setState({
                loader: true
            })
            let fd = new FormData();
            fd.append("image", this.state.post.file);
            fd.append("description", this.state.post.description);
            this.props.axios.post("/post/create-post", fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then(response => {
                this.props.uploadPostToUser(response.data);
                this.setState({
                    loader: false,
                    result: 'success'
                })
            }).catch(e => {
                console.log(e)
                this.setState({
                    loader: false,
                    result: 'error'

                })
            })
        }
    }
    render() {

        return (
            <div className='container'>
                <div className="row">

                    {

                        !this.state.result ?
                        <div className={Classes.content}>
                            <div className={Classes.preview}>
                                <Post showComments={false} post={this.state.post} style={{flex: '47%'}}/>
                            </div>
                            <div className={Classes.createPostMenu}>
                                <CreatePostMenu loader={this.state.loader} createPost={() => this.createPost()} forwardState={(state) => {this.forwardState(state)}}/>
                            </div>
                        </div>
                            : <div className={Classes.resultBlock}>

                                {
                                    this.state.result === 'success' ?
                                        <div className={Classes.resultBlockWrapper}>
                                            <img className={Classes.result} src="/img/posts/success.jpg" alt=""/>
                                            <p>You create your post</p>
                                            <NavLink to={"/profile"}>Profile</NavLink>
                                        </div>
                                        : null
                                }
                                {
                                    this.state.result === 'error' ?
                                        <div className={Classes.resultBlockWrapper}>
                                            <img className={Classes.result} src="/img/posts/error.jpg" alt=""/>
                                            <p>Server error</p>
                                        </div>
                                    : null
                               }
                            </div>
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        axios: state.settings.axios
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadPostToUser: (post) => {
            dispatch(uploadPostToUser(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
