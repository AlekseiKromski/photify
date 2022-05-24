import React, {Component} from 'react';
import Classes from './Events.module.css'
import Event from './Event/Event'
class Events extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div ref={this.props.eventsDOM} className={Classes.events}>
                <h1>Events</h1>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
            </div>
        );
    }
}

export default Events;
