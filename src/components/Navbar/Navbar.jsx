import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return   (<nav className={classes.nav}>
                <ul>
                    <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li> {/* a href */}
                    <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active} >Messages</NavLink></li>
                    <li className={classes.item}><NavLink to="/news"  activeClassName={classes.active} >News</NavLink></li>
                    <li className={classes.item}><a href="/music" className={`${classes.item} ${classes.active}`}>Music</a></li>
                    <li className={classes.item}><a href="/settings" className={classes.item}>Settings</a></li>
                </ul>
              </nav>);
}

export default Navbar;