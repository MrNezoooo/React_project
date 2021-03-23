import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import PlayList from './components/PlayList/PlayList.jsx';
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import {addPost, updateNewPostText} from "./redux/state";

/*  ----UI React----  */

const App = (props) =>  {


    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header />
                <Navbar  usersTwoLevel={props.appState.navbar.friendsData} />
                    <div className="app-wrapper-content">
                       {/* <Route path='/profile' component={Profile} />
                        <Route path='/dialogs' component={Dialogs} /> */}{/* <Route exact - співпадіння тоді тільки точне  */}

                        <Route path='/profile'
                               render={ () => <Profile  postsThreeLevel={props.appState.profile.postData}  SecondNewPostText={props.appState.profile.NewPostText} dispatch={props.dispatch}/*addPostThird={props.addPostSecond} updateNewPostText={props.updateNewPostText}*/ /> } />
                        <Route path='/dialogs'
                               render={ () => <Dialogs store={props.store} /*NewMessageBody={props.appState.dialogs.NewMessageBody}  dialogsThreeLevel={props.appState.dialogs.dialogsData} messagesThreeLevel={props.appState.dialogs.messagesData} dispatch={props.dispatch}*//> } /> {/* передаємо анонімну функцію  */}
                        <Route path='/news' component={News} />
                        <Route path='/music' render={ () => <PlayList /> } />
                    </div>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;