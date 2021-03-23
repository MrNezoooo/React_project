/*  MyPosts */
const ADD_POST = 'ADD_POST'; //для того щоб відловити неправельне введеня назви
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {

    if (action.type === 'ADD-POST'){
        let newPost = {
            id: 5,
            message: this._state.profile.NewPostText, //postMessage, //перемінна яку введуть
            likesCount: 777,
        };
        state.postData.push(newPost); //push в масив добавляє новий елемент
        state.updateNewPostText='';


    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.NewPostText = action.newText;  //action бо приходять запханий текст з зовні




        return state;
}