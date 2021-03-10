import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "../Dialogs/Message/Message";




const Profile = (props) => {
    return    (<div className={classes.content}>
                    <ProfileInfo />
                 {/*    <MyPosts message='Hello' likesCount='3' />
                     <MyPosts message='Hello' likesCount='3' />*/}

                    <MyPosts postsTwoLevel={props.postsThreeLevel} addPostFourth ={props.addPostThird}/>

                </div>);
}

export default Profile;