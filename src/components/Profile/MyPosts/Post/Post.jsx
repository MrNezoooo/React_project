import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return  (<div className={classes.posts}>
                <div className={`${classes.post} ${classes.item}`}>
                    <img src='https://avatarfiles.alphacoders.com/126/thumb-126082.jpg'/>
                    <span>{props.message} Likes({props.likesCount})</span>
                    <div><span>like</span></div>
                </div>
             </div>);
}

export default Post;