import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from "./components/Profile/Profile";
import state from './redux/state.js';

import {addPost} from "./redux/state"; // експорт addPost

/*  ----BLL REDUX----   */
/*  знаходится в state.js   */

/*addPost('Java Script TEXT');*/  //викликали тут функцію з state.js дальше прокидуємо через пропси

let renderEntireTree = () => { //перемальвка всієї преложухі
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPostSecond={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
