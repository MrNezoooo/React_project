import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
/*---------------------------*/
import Profil from "../Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"; //іімпорт action creator

/*Емітація бази данних*/
/*Лежить в INDEX.JS -  BLL (bisines logic Layer) REDUX*/
/*let postData=[{id:1, message:'Hi how are you? 111', likesCount: 40}, {id:2, message:'Its my first post 111', likesCount: 30}];*/

//-------action creator------------мають зберігатися в світі state.js переносимо їх туди

/*let addPostActionCreator = () => {  //цю функцію ми просто імпортуєм це не частина логіки
    return {
        type: 'ADD-POST'
    }
};
let updateNewPostTextActionCreator = (text) => {  //цю функцію ми просто імпортуєм це не частина логіки
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
};*/

const MyPosts = (props) => {
    /*--------------------------------------*/

    let newPosts = props.postsTwoLevel.map( post =>
             <Post message={post.message}  likesCount={post.likesCount} /> );

    /*--/ В React--*/
    let newPostElement = React.createRef(); //як по id
    /*--/ / В React--*/

    let addPostClick = () => {
        /*--В java scrept--*/
       /* let text = document.getElementById('new-post').value; //по id
        alert(text);*/
        /*--/ В java scrept--*/

        /*--/ В React--*/
        //вже не треба бо викликаєтся нижче в  onPostChange!!!
        let text_postMessage = newPostElement.current.value;  /*можем тепер нічого не відправляти бо є onPostChange*/

        //БУЛО
        //props.addPostFourth(text_postMessage);  //Викличем функцію addPost тут. було alert(text);
        //СТАЛО

        //props.dispatch({type: 'ADD-POST'});
        props.dispatch(addPostActionCreator());

        newPostElement.current.value = ''; //F: очистить поле для ввода від введеного попередньо значення
            /*--/ / В React--*/

        /*alert('Hello!!!')*/
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        /*console.log(text);*/

        //БУЛО
        //props.updateNewPostText(text); //виклик функції з світу state
        //СТАЛО
        //let action ={type: 'UPDATE-NEW-POST-TEXT'};
        let action = updateNewPostTextActionCreator(text);

        props.dispatch(action);
    };
    return (<div className={classes.postBlock}>
            <h3>My Posts</h3>
                    <div>
                       {/* <div>
                        <textarea ref={newPostElement} id='new-post'/>    В java script
                        </div>*/}
                        <div>
                            <textarea onChange={onPostChange} ref={newPostElement}  value={props.FirstNewPostText}  /> {/* value={props.FirstNewPostText} */}
                        </div>{/*// <textarea ref={newPostElement} value="Text proba.com" />*/}
                        <div>
                        <button onClick={ addPostClick }>Add post</button>
                        <button onClick={ () => {alert('Hello!!!')}}>Remove</button>
                        </div>
                    </div>
                    <div className={classes.posts}>

                        {newPosts}

                       {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                        <Post message={postData[1].message} likesCount={postData[1].likesCount} />*/}
                        {/*<Post message='Hi how are you?' likesCount='15'/>
                        <Post message="It's my first post" likesCount='20' />*/}
                        <Post />
                        <Post />
                    </div>

    </div>

    )}

export default MyPosts;