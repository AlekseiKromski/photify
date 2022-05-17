import React, {Component} from 'react';
import Classes from './Events.module.css'
class Events extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div ref={this.props.eventsDOM} className={Classes.events}>
                Events
            </div>
        );
    }
}

export default Events;
