import React, {Component} from 'react';
import Classes from './createMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera} from "@fortawesome/free-solid-svg-icons"
class CreatePostMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: "",
            description : "Type something about your photo",
            active: false,
        }
        this.file = React.createRef();
    }

    componentDidMount() {
        this.props.forwardState(this.state)
    }

    updateInstance(field, value){
        let preparedData = {[field]: value}
        this.setState(preparedData)
        this.props.forwardState(preparedData)

    }
    prepareImage(event){
        let file = event.target.files[0];
        this.updateInstance('file', file)
        let fr = new FileReader();
        let result = fr.readAsDataURL(file)
        fr.onload = () => {
            let preparedData = {image: fr.result}
            this.setState(preparedData)
            this.updateInstance('image', fr.result)
        }
    }
    render() {
        return (
            <div className={Classes.createPostMenu}>
                <h1>Create post</h1>

                <div className={Classes.inputBlock}>
                    <label   htmlFor="">Photo</label>
                    <input ref={this.file} type="file" onChange={(event) => this.prepareImage(event)} hidden/>
                    <div onClick={() => {this.file.current.click()}} className={Classes.uploadPhoto}>
                        <FontAwesomeIcon  className={Classes.photoIcon} icon={faCamera}></FontAwesomeIcon>
                    </div>
                </div>

                <div className={Classes.inputBlock}>
                    <label htmlFor="">Description</label>
                    <textarea value={this.state.description} onChange={(event) => this.updateInstance('description', event.target.value)} onresize={false} className={Classes.textArea}>
                    </textarea>
                </div>

                <div className={Classes.inputBlock}>
                    <button onClick={() => {this.props.createPost()}} className={this.state.description != "" && this.state.image != "" ? Classes.button : Classes.disableButton}>

                        {!this.props.loader ? <span>Create post</span>:<span>Loading</span>}
                    </button>

                </div>
            </div>
        );
    }
}

export default CreatePostMenu;
