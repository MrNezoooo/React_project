import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return  (<div className={classes.posts}>
                <div className={`${classes.post} ${classes.item}`}>
                    <img src='https://avatarfiles.alphacoders.com/126/thumb-126082.jpg'/>
                    <span>{props.message}</span>
                    <div><span>likes: {props.likesCount}</span></div>
                </div>
             </div>);
}

export default Post;