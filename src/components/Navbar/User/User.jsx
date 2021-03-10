import React from 'react';
import classes from './User.module.css'

const User = (props) => {
    return  (<div className={classes.user}>
                <div className={`${classes.user} ${classes.item}`}>
                    <img src={props.img}/>
                </div>

                <div className={classes.main}>
                    <span className={classes.box}>{props.name}</span>
                </div>
            </div>)
}

export default User;