import {Component} from "react";
import Classes from './YourSubscription.module.css';
import Profile from './Profile/Profile'
import {connect} from "react-redux";

class YourSubscription extends Component{
    render(){

        return (
            <div className={Classes.main}>
                <h1>Your subscriptions</h1>
                {this.props.user.followed.map(profile => {
                    return (<Profile key={profile._id} profile={profile}/>)
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}
export default connect(mapStateToProps, null)(YourSubscription);
