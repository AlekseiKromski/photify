import React, {Component} from 'react';
import Navigation from "../../components/navigaion/navigation";

class Main_layout extends Component{
    render(){
        return (
            <div className={'container'}>
                <Navigation></Navigation>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Main_layout;
