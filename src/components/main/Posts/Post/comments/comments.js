import {Component} from "react";
import Comment from "./comment";
import Classes from './comment.module.css';
import Input from '../../../../UI/input/Input'
import Send from '../../../../UI/send/Send'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
class Comments extends Component{
    render(){
        let comments = [1,2,3,4,5,6]
        const commentsElements = comments.map((number) =>
            <Comment key={number}/>
        );

        return (
            <div>
                <PerfectScrollbar className={Classes.comments}>
                    {commentsElements}
                </PerfectScrollbar>
                <div className={Classes.inputSection}>
                    <Input/>
                    <Send/>
                </div>
            </div>
        )
    }
}

export default Comments;
