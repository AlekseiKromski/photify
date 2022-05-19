import React, {Component} from 'react';
import Classes from './Posts.module.css'
class Posts extends Component {
    render() {
        return (
            <div className={Classes.posts}>
                <h1>Posts</h1>
                <div className={Classes.postRow}>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                </div>
                <div className={Classes.postRow}>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                </div>
                <div className={Classes.postRow}>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                </div>
                <div className={Classes.postRow}>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                    <div className={Classes.post} style={{background: "url('/img/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg')"}}></div>
                </div>
            </div>
        );
    }
}

export default Posts;
