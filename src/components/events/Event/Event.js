import React, {Component} from 'react';
import Classes from './event.module.css'
import {logDOM} from "@testing-library/react";
class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className={Classes.event}>
                <div className={Classes.header}>
                    <h1>#milana</h1>
                    <span>29.02.2022</span>
                </div>
                <div className={Classes.eventDescription}>
                    <span className={Classes.selected}>liked</span> your photo
                </div>
            </div>
        );
    }
}

export default Event;
