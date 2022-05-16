import {Component} from "react";
import Comment from "./comment";
import Classes from './comment.module.css';
import Input from '../../../../UI/input/Input'
import Send from '../../../../UI/send/Send'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
class Comments extends Component{

    constructor(props) {
        super(props);
        this.state = {
            scrollRef: null,
            comments: [{
                text: "test"
            }],
            text: ""
        }
    }

    setScrollRef(ref){
        this.setState({scrollRef: ref})
    }

    setTextHandler(text){
        this.setState({text: text})

    }

    createNewCommentHandler(){
        console.log(this)
        let comments = this.state.comments;
        comments.push({text: this.state.text})
        this.setState({comments: comments, text: ""})
    }

    componentDidUpdate() {
        this.state.scrollRef.scrollTop = this.state.scrollRef.scrollHeight
    }

    render(){
        let displayedComments = this.state.comments.map((comment) =>
            <Comment
                key={comment.text}
                comment={comment}

            />
        );

        return (
            <div>
                <PerfectScrollbar
                    containerRef={ref=>{
                        this.setScrollRef(ref)
                    }}
                    className={Classes.comments}>
                    {displayedComments}
                </PerfectScrollbar>
                <div className={Classes.inputSection}>
                    <Input text={this.state.text} setText={(text) => this.setTextHandler(text)}/>
                    <Send createNewComment={() => { this.createNewCommentHandler() }}/>
                </div>
            </div>
        )
    }
}



export default Comments;
