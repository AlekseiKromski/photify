import React, {Component} from 'react';
import Classes from './main.module.css'
import Profile from '../../components/main/profile/profile'
import Description from "../../components/main/description/description";
import Comments from "../../components/main/comments/comments";
class Main extends Component{
    render(){
        return (
            <div className={'row ' + Classes.main}>
                <div className={Classes.posts}>
                    <div className={Classes.postLeft}>
                        <Profile/>
                        <Description/>
                        <Comments/>
                    </div>
                    <div className={Classes.postRight}>
                        <img className={Classes.postImage} src="/img/posts/fineas-anton-8pKrkO2cx1A-unsplash.jpg" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
