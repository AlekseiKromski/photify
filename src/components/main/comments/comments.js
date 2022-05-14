import {Component} from "react";
import Comment from "./comment";
import Classes from './comment.module.css';

class Comments extends Component{
    render(){
        let comments = [1,2,3,4,5,6]
        const commentsElements = comments.map((number) =>
            <Comment key={number}/>
        );
        return (
            <div className={Classes.comments}>
                {commentsElements}
            </div>
        )
    }
}

export default Comments;
