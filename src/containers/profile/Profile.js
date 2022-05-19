import React, {Component} from 'react';
import Classes from './Profile.module.css'
import MainProfile from '../../components/profile/mainProfile/mainProfile'
import Posts from '../../components/profile/posts/Posts'
class Profile extends Component {
    render() {
        return (
            <div className={'row ' + Classes.profile}>
                <MainProfile/>
                <Posts/>
            </div>
        );
    }
}

export default Profile;
