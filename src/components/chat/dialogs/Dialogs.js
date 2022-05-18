import React, {Component} from 'react';
import Classes from './dialogs.module.css'
import Dialog from "./dialogs/dialog";
import PerfectScrollbar from 'react-perfect-scrollbar'

class Dialogs extends Component {
    render() {
        return (
            <div className={Classes.dialogs}>
                <h1>Your chats</h1>
                <PerfectScrollbar
                    style={{height: 500}}
                    // containerRef={ref=>{
                    //     this.setScrollRef(ref)
                    // }}
                    >
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                    <Dialog/>
                </PerfectScrollbar>

            </div>
        );
    }
}

export default Dialogs;
