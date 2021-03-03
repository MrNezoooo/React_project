import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';

const App = () =>  {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header />
                <Navbar />
                    <div className="app-wrapper-content">
                        <Route path='/profile' component={Profile} />
                        <Route path='/dialogs' component={Dialogs} /> {/* <Route exact - співпадіння тоді тільки точне  */}
                        <Route path='/news' component={News} />
                    </div>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;