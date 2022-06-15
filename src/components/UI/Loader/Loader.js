import React, {Component} from 'react';
import Classes from './Loader.module.css'
class Loader extends Component {
    render() {
        return (
            <div className={Classes.loaderWrapper}>
                <h1 className={Classes.loaderName}>Photify</h1>
                <div className={Classes['lds-facebook']}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Loader;