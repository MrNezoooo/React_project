import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
/*---------------------------*/
import Profil from "../Profile";

/*Емітація бази данних*/
/*Лежить в INDEX.JS -  BLL (bisines logic Layer) REDUX*/
/*let postData=[{id:1, message:'Hi how are you? 111', likesCount: 40}, {id:2, message:'Its my first post 111', likesCount: 30}];*/




const MyPosts = (props) => {

    let newPosts = props.postsTwoLevel.map( post =>
             <Post message={post.message}  likesCount={post.likesCount} /> );

    /*--/ В React--*/
    let newPostElement = React.createRef();
    /*--/ / В React--*/

    let addPost = () => {
        debugger;
        /*--В java scrept--*/
       /* let text = document.getElementById('new-post').value; //по id
        alert(text);*/
        /*--/ В java scrept--*/

        /*--/ В React--*/
        let text = newPostElement.current.value;
        props.addPost(text);  //Викличем функцію тут alert(text);
        newPostElement.current.value = '';
            /*--/ / В React--*/

        /*alert('Hello!!!')*/
    };

    return (<div className={classes.postBlock}>
            <h3>My Posts</h3>
                    <div>
                        <div>
                        <textarea ref={newPostElement} id='new-post'></textarea>
                        </div>
                        <div>
                        <button onClick={ addPost }>Add post</button>
                        <button onClick={ () => {alert('Hello!!!')}}>Remove</button>
                        </div>
                    </div>
                    <div className={classes.posts}>

                        {newPosts}

                       {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                        <Post message={postData[1].message} likesCount={postData[1].likesCount} />*/}
                        <Post message='Hi how are you?' likesCount='15'/>
                        <Post message="It's my first post" likesCount='20' />
                        <Post />
                        <Post />
                    </div>

    </div>

    )}

export default MyPosts;