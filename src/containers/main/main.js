import React, {Component} from 'react';
import Classes from './main.module.css'
import Posts from '../../components/main/Posts/Posts'
import YourSubscription from "../../components/main/yourSubcriptions/YourSubscription";
class Main extends Component{
    render(){

        return (
            <div className={'row ' + Classes.main}>
                <Posts></Posts>
                <YourSubscription></YourSubscription>
            </div>
        )
    }
}

export default Main;
