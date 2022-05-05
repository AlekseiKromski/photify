import React, {Component} from 'react';
import Classes from './main.module.css'
import Profile from '../../components/main/profile/profile'
class Main extends Component{
    render(){
        return (
            <div className={'row ' + Classes.main}>
                <div className={Classes.posts}>
                    <Profile></Profile>
                </div>
            </div>
        )
    }
}

export default Main;
