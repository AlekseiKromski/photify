import React, {Component} from 'react';
import Classes from './createPost.module.css'
import Post from '../../components/main/Posts/Post/Post'
import CreatePostMenu from "../../components/CreatePostMenu/createPostMenu";
class CreatePost extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className={Classes.content}>
                        <div className={Classes.preview}>
                            <Post style={{flex: '47%'}}/>
                        </div>
                        <div className={Classes.createPostMenu}>
                            <CreatePostMenu/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;
