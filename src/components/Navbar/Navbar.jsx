import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";
import User from './User/User.jsx'

const Navbar = (props) => {

    let allUsers = props.usersTwoLevel.map
                ( user => <User name={user.name} img={user.img}   /> );

    let n = 3;
    let allUser = allUsers.slice(0, n); // [1, 2, 3]

    return   (<nav className={classes.nav}>
                <ul>
                    <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li> {/* a href */}
                    <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active} >Messages</NavLink></li>
                    <li className={classes.item}><NavLink to="/news"  activeClassName={classes.active} >News</NavLink></li>
                    <li className={classes.item}><NavLink to="/music"  activeClassName={classes.active} >Music</NavLink></li>

                    <li className={classes.item}><a href="/settings" className={classes.item}>Settings</a></li>
                </ul>

                        <div>

                        <p className={classes.span}>Friends</p>

                        <div className={classes.users}>
                         {allUser}
                        </div>

                        </div>

              </nav>);
}

export default Navbar;