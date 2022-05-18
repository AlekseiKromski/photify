import React, {Component} from 'react';
import Classes from './createMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera} from "@fortawesome/free-solid-svg-icons"
class CreatePostMenu extends Component {
    render() {
        return (
            <div className={Classes.createPostMenu}>
                <h1>Create post</h1>

                <div className={Classes.inputBlock}>
                    <label htmlFor="">Photo</label>
                    <input type="file" hidden/>
                    <div className={Classes.uploadPhoto}>
                        <FontAwesomeIcon className={Classes.photoIcon} icon={faCamera}></FontAwesomeIcon>
                    </div>
                </div>

                <div className={Classes.inputBlock}>
                    <label htmlFor="">Description</label>
                    <textarea onresize={false} className={Classes.textArea}>

                    </textarea>
                </div>

                <div className={Classes.inputBlock}>
                    <button className={Classes.button}>Create post</button>

                </div>
            </div>
        );
    }
}

export default CreatePostMenu;
