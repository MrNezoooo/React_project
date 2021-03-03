import React from 'react';
import classes from './Header.module.css'

const Header = (props) => {
    return   <header className={classes.header}>
                        <img src='http://placekitten.com/200/300'></img>
            </header>
}

export default Header;