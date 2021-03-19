
const ADD_POST = 'ADD_POST'; //для того щоб відловити неправельне введеня назви
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//===================OOP============================================
let store = {
    getState(){  //метод вертає нам  _state на зовню
        return this._state;
    },

    _state: {  // _означає приватні данні
        /*   Profile  */
        profile: {
            /*   Profile->MyPosts->Post   */
            postData:   [
                {id:1, message:'Its my first post 3332', likesCount: 55},
                {id:2, message:'Are you? 333', likesCount: 55},
                {id:3, message:'First post 333', likesCount: 55}
            ],
            NewPostText: 'Text text text'
        },

        /* Dialogs */
        dialogs: {
            /* Dialogs->DialogIteme */
            dialogsData:    [
                {id:1, name:'Dimych 111'},
                {id:2, name:'Andrey 1'},
                {id:3, name:'Mykola'}
            ],
            /* Dialogs->Message */
            messagesData: [
                {id:1, message:'How are You'},
                {id:2, message:'Yo!'}
            ],
        },

        /* Sidebar  */
        navbar: {
            /*   Navbar->Navbar.jsx   */
            friendsData: [
                {id:1, name:'William', img:'https://avatarfiles.alphacoders.com/905/905.jpg' },
                {id:2, name:'Emma', img:'https://avatarfiles.alphacoders.com/175/thumb-1920-175981.jpg'},
                {id:3, name:'Michael', img:'https://avatarfiles.alphacoders.com/151/151432.jpg'},
                {id:4, name:'Emily', img:'https://avatarfiles.alphacoders.com/147/thumb-147622.jpg'},
                {id:5, name:'Lily', img:'https://avatarfiles.alphacoders.com/147/147489.jpg'},
                {id:6, name:'Amelia', img:'https://avatars.alphacoders.com/avatars/view/130403'},
            ],
        },


    } , // (1) state тепер свойство   _ означає приватні данні
        //-----(2)------------------------
    _renderEntireTree () {  // (2) робим методом - запис ооп
        console.log('State is changed')},
    //----------(3)-------------------
/*    addPost(){ //функція добавить в масив новий пост (видалемо postMessage)
        let newPost = {

            id: 5,
            message: this._state.profile.NewPostText, //postMessage, //перемінна яку введуть
            likesCount: 777,
        };
            this._state.profile.postData.push(newPost); //push в масив добавляє новий елемент
            this._state.profile.updateNewPostText='';
            this._renderEntireTree(this._state);
},*/
    //----------(4)-------------------
/*    updateNewPostText(newText){ //функція добавить в масив новий пост

        this._state.profile.NewPostText = newText;  //запханий текст

        this._renderEntireTree(this._state); //перемальвуємо все дерево
},*/
    //----------(5)-------------------
        subscribe(observer){  //функція імпортує всередену другу функцію
        this._renderEntireTree = observer; //ПАТЕРН !!!!!
    },

    //===============DISPATCH------------ З зовнішнього світу щоб ви не хотіли змінити в  store використовуйте метод  dispatch=======================
    dispatch(action){   //action це обєкт в ньог свойство {type: 'ADD_POST'}  'ADD_POST' - назва дії Текстовий тип '...'
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profile.NewPostText, //postMessage, //перемінна яку введуть
                likesCount: 777,
            };
            this._state.profile.postData.push(newPost); //push в масив добавляє новий елемент
            this._state.profile.updateNewPostText='';
            this._renderEntireTree(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profile.NewPostText = action.newText;  //action бо приходять запханий текст з зовні
            this._renderEntireTree(this._state); //перемальвуємо все дерево
        }
    },

}

/*-----------action creator, action type-----------------*/
export const addPostActionCreator = () => {  //цю функцію ми просто імпортуєм це не частина логіки
    //const ADD_POST = 'ADD_POST'; // action type робим знеї константу і виносим вверх файлу
    return {
        type: 'ADD-POST'
    }
};
export const updateNewPostTextActionCreator = (text) => {  //цю функцію ми просто імпортуєм це не частина логіки

    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
};
/*-------------/ action creator---------------*/


export default store;
//========================STATE=====================================
/*import {renderEntireTree} from "../render.js";*/
/*let renderEntireTree = () => {           // (2)
    console.log('State is changies')
}*/

//========================//
/*  ----BLL  FLUX -> REDUX----   */
// BLL=уровень бизнес-логики FLUX=Архетиктура однопотокова REDUX=реалізація MobX(OOP)
//========================//

/*/!*   Profile->MyPosts->Post   *!/
let postData =  [   {id:1, message:'How are you? 333', likesCount: 55},
    {id:2, message:'Its my first post 3332', likesCount: 55},
    {id:1, message:'Are you? 333', likesCount: 55},
    {id:2, message:'First post 333', likesCount: 55},
];
/!* Dialogs->DialogIteme *!/
let dialogsData =   [ {id:1, name:'Dimych 111'},
    {id:2, name:'Andrey 1'},
    {id:3, name:'Mykola'}
];
/!* Dialogs->Message *!/
let messagesData = [    {id:1, message:'Hi 1111'},
    {id:2, message:'How are Youb 1'},
    {id:3, message:'Yo 1'}
];*/


/*
let state = {  //запакували дані в одні кучу
    /!*   Profile  *!/
    profile: {
        /!*   Profile->MyPosts->Post   *!/
        postData:   [
            {id:1, message:'Its my first post 3332', likesCount: 55},
            {id:2, message:'Are you? 333', likesCount: 55},
            {id:3, message:'First post 333', likesCount: 55}
        ],
        NewPostText: 'Текст переданий з вікна вводу My Posts'
    },

    /!* Dialogs *!/
    dialogs: {
        /!* Dialogs->DialogIteme *!/
        dialogsData:    [
            {id:1, name:'Dimych 111'},
            {id:2, name:'Andrey 1'},
            {id:3, name:'Mykola'}
            ],
        /!* Dialogs->Message *!/
        messagesData: [
            {id:1, message:'How are You'},
            {id:2, message:'Yo!'}
             ],
            },

    /!* Sidebar  *!/
    navbar: {
        /!*   Navbar->Navbar.jsx   *!/
        friendsData: [
            {id:1, name:'William', img:'https://avatarfiles.alphacoders.com/905/905.jpg' },
            {id:2, name:'Emma', img:'https://avatarfiles.alphacoders.com/175/thumb-1920-175981.jpg'},
            {id:3, name:'Michael', img:'https://avatarfiles.alphacoders.com/151/151432.jpg'},
            {id:4, name:'Emily', img:'https://avatarfiles.alphacoders.com/147/thumb-147622.jpg'},
            {id:5, name:'Lily', img:'https://avatarfiles.alphacoders.com/147/147489.jpg'},
            {id:6, name:'Amelia', img:'https://avatars.alphacoders.com/avatars/view/130403'},
        ],
    },


}


/!*==========================================*!/

export const addPost = () => { //функція добавить в масив новий пост (видалемо postMessage)
            let newPost = {
                id: 5,
                message: state.profile.NewPostText, //postMessage, //перемінна яку введуть
                likesCount: 777,
            };
            state.profile.postData.push(newPost); //push в масив добавляє новий елемент

            renderEntireTree(state);
}  //(3)

export const updateNewPostText = (newText) => { //функція добавить в масив новий пост

    state.profile.NewPostText = newText;  //запханий текст

    renderEntireTree(state); //перемальвуємо все дерево
}  //(4)

export const subscribe = (observer) => {  //функція імпортує всередену другу функцію
    renderEntireTree = observer;
}  //(5)

    /!*==========================================*!/
export default state;*/
