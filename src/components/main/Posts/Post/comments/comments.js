import {Component} from "react";
import Comment from "./comment";
import Classes from './comment.module.css';
import Input from '../../../../UI/input/Input'
import Send from '../../../../UI/send/Send'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import {connect} from "react-redux";
import {setComment} from "../../../../../store/actions/postAction";
class Comments extends Component{

    constructor(props) {
        super(props);
        this.state = {
            scrollRef: null,
            text: "",
        }
    }

    setScrollRef(ref){
        this.setState({scrollRef: ref})
    }

    setTextHandler(text){
        this.setState({text: text})

    }

    createNewCommentHandler(){
        if(this.state.text !== ''){
            this.props.axios.post("/comment/create-comment", {
                comment: this.state.text,
                postId: this.props.postId
            }).then(({data}) => {
                this.props.setComment({data, postId: this.props.postId});
                this.setState({text: ""})
            }).catch(e => {
                console.log(e)
            })

        }
    }

    componentDidUpdate() {
        this.state.scrollRef.scrollTop = this.state.scrollRef.scrollHeight
    }

    render(){
        let displayedComments = this.props.comments.map((comment) =>
            <Comment
                key={comment._id}
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
                    <Input createNewComment={() => {this.createNewCommentHandler()}} text={this.state.text} setText={(text) => this.setTextHandler(text)}/>
                    <Send createNewComment={() => { this.createNewCommentHandler() }}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        axios: state.settings.axios
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setComment: (value) => dispatch(setComment(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
