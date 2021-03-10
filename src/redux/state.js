//========================//
/*  ----BLL REDUX----   */
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
//--------------------------------
let state = {  //запакували дані в одні кучу
    /*   Profile  */
    profile: {
        /*   Profile->MyPosts->Post   */
        postData:   [
            {id:1, message:'Its my first post 3332', likesCount: 55},
            {id:2, message:'Are you? 333', likesCount: 55},
            {id:3, message:'First post 333', likesCount: 55}
        ],
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


}

/*==========================================*/

export let addPost = (postMessage) => { //функція добавить в масив новий пост
    debugger;
            let newPost = {
                id: 5,
                message: postMessage, //перемінна яку введуть
                likesCount: 777,
            };
            state.profile.postData.push(newPost); //push в масив добавляє новий елемент
}

export default state;