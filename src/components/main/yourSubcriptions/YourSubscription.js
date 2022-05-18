import {Component} from "react";
import Classes from './YourSubscription.module.css';
import Profile from './Profile/Profile'

class YourSubscription extends Component{
    render(){
        let test = []
        for(let i = 0; i < 4; i++){
            test.push(<Profile key={i}/>)
        }

        return (
            <div className={Classes.main}>
                <h1>Your subscriptions</h1>
                {test}
            </div>
        )
    }
}

export default YourSubscription;
