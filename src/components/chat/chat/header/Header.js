import React, {Component} from 'react';
import Classes from './header.module.css'
class Header extends Component {
    render() {
        return (
            <div className={Classes.header}>
                <div className={Classes['profile-image']} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}} />
                <div className={Classes.profile}>
                    <h1>#milana</h1>
                    <p>Professional designer</p>
                </div>
                <span className={Classes.status}>online</span>
            </div>
        );
    }
}

export default Header;
