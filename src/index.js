import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, updateNewPostText} from "./redux/state"; // експорт addPost
//import state, {subscribe} from './redux/state.js';
import store from './redux/state.js';


import reportWebVitals from './reportWebVitals';

import Profile from "./components/Profile/Profile";



//import {renderEntireTree} from "./render"; //імпортуєм з render.js
/*  ----BLL REDUX----   */
/*  знаходится в state.js   */

/*addPost('Java Script TEXT');*/  //викликали тут функцію з state.js дальше прокидуємо через пропси

/*let renderEntireTree = () => { //перемальвка всієї преложухі
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPostSecond={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}*/


let renderEntireTree = () => { //перемальвка всієї преложухі

    ReactDOM.render(  //Тут Відбуваєтся перерисовка всієї прілажухі
      /*  <React.StrictMode>
            <App  appState={store.getState()} addPostSecond={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />  bind(store) вказуєм(привязуєм) імя автора від якого ми передаємо його дальше вглубину
        </React.StrictMode>,*/

        <React.StrictMode>
            <App  appState={store.getState()} dispatch={store.dispatch.bind(store)} />  {/*bind(store) вказуєм(привязуєм) імя автора від якого ми передаємо його дальше вглубину*/}
        </React.StrictMode>,


        document.getElementById('root'));
};


renderEntireTree(store.getState()); //виклик функції

store.subscribe(renderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();