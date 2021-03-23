/*  MyPosts */
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD_POST'; //для того щоб відловити неправельне введеня назви
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.NewPostText, //postMessage, //перемінна яку введуть
                    likesCount: 777,
                };
                state.postData.push(newPost); //push в масив добавляє новий елемент
                state.updateNewPostText='';

                return state; //замість braik
        case UPDATE_NEW_POST_TEXT:
                state.NewPostText = action.newText;  //action бо приходять запханий текст з зовні

                return state; //замість braik

        default:
                return state;  //по замовчуванню якщо  state не повернется
    }

/*
    if (action.type === 'ADD-POST'){
        let newPost = {
            id: 5,
            message: state.NewPostText, //postMessage, //перемінна яку введуть
            likesCount: 777,
        };
        state.postData.push(newPost); //push в масив добавляє новий елемент
        state.updateNewPostText='';


    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.NewPostText = action.newText;  //action бо приходять запханий текст з зовні

    }*/


        //return state;
}

/*-----------action creator-----------------*/
export const addPostActionCreator = () => {  //цю функцію ми просто імпортуєм це не частина логіки
    //const ADD_POST = 'ADD_POST'; // action type робим знеї константу і виносим вверх файлу
    return {
        type: 'ADD-POST'
    }
};
export const updateNewPostTextActionCreator = (text) => {  //цю функцію ми просто імпортуєм це не частина логіки

    return {
        type: 'UPDATE_NEW_POST_TEXT', newText: text
    }
};


    export default profileReducer;