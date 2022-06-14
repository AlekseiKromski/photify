import Classes from './Profile.module.css'
import MainProfile from '../../components/profile/mainProfile/mainProfile'
import Posts from '../../components/profile/posts/Posts'
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
const Profile = (props) => {
    const [user, setUser] = useState(null)
    const {userId} = useParams();
    useEffect(  () => {
        let run = async () => {
            if(props.user._id != userId){
                let user = await props.axios.get(`/profile/account/${userId}`)
                setUser(user.data);
            }else{
                setUser(props.user)
            }
        }
        run();
    }, [userId])
    return (
        <div >
            {
                user ? <div className={'row ' + Classes.profile}>
                    <MainProfile user={user}/>
                    <Posts posts={user.posts}/>
                </div> : ''
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
       axios: state.settings.axios,
       user: state.user.user
    }
}
export default connect(mapStateToProps, null)(Profile);
