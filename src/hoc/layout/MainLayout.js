import React, {Component} from 'react';
import Navigation from "../../components/navigaion/navigation";
import Events from '../../components/events/Events'
class Main_layout extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showEvents: false,
            eventsDOM: React.createRef()
        }
    }

    showEventsHandler(){
        if(this.state.eventsDOM){
            if(this.state.showEvents === true){
                this.state.eventsDOM.current.classList.add('hide');
                this.state.eventsDOM.current.addEventListener('animationend', () => {
                    this.setState({showEvents: !this.state.showEvents})
                })
            }else{
                this.setState({showEvents: !this.state.showEvents})
            }
        }
    }

    render(){
        return (
            <div className={'container'}>
                <Navigation showEvents={this.state.showEvents} showEventsTrigger={() => {this.showEventsHandler()}}></Navigation>
                {
                    this.state.showEvents ? <Events eventsDOM={this.state.eventsDOM} /> : null
                }
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Main_layout;
