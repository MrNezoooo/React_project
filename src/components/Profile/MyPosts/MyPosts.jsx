import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post.jsx";


/*Емітація бази данних*/
let postData=[{id:1, message:'Hi how are you? 111', likesCount: 40}, {id:2, message:'Its my first post 111', likesCount: 30}];

/* ------------------*/

const newPosts =
    postData.map(post =>{
        return <Post message={post.message}  likesCount={post.likesCount} /> });

const MyPosts = (props) => {
    return (<div className={classes.postBlock}>
            <h3>My Posts</h3>
                    <div>
                        <div>
                        <textarea></textarea>
                        </div>
                        <div>
                        <button>Add post</button>
                        <button>Remove</button>
                        </div>
                    </div>
                    <div className={classes.posts}>

                        {newPosts}

                        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                        <Post message='Hi how are you?' likesCount='15'/>
                        <Post message="It's my first post" likesCount='20' />
                        <Post />
                        <Post />
                    </div>

    </div>

    )}

export default MyPosts;