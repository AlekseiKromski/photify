import React, {Component} from 'react';
import Classes from './messages.module.css'
import Message from "./message/Message";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Dialog from "../../dialogs/dialogs/dialog";

class Messages extends Component {
    render() {
        return (
            <div className={Classes.messages}>
                <PerfectScrollbar
                    style={
                        {
                            height: 500,
                            display: 'flex',
                            flexDirection: "column"
                        }
                    }
                    // containerRef={ref=>{
                    //     this.setScrollRef(ref)
                    // }}
                >
                    <Message who='friend'/>

                    <Message who='me'/>
                    <Message who='me'/>
                    <Message who='me'/>
                    <Message who='me'/>
                    <Message who='me'/>
                    <Message who='me'/>
                    <Message who='me'/>
                    <Message who='me'/>
                    <Message who='friend'/>
                    <Message/>
                    <Message/>
                </PerfectScrollbar>
                <span className={Classes.isWriting}>#lana is writing ...</span>
            </div>
        );
    }
}

export default Messages;
