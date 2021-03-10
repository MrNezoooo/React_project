import React from 'react';
import classes from './Song.module.css'


const Song = (props) => {
    return    (<div className={classes.content}>
                    <div className={`${classes.post} ${classes.item}`}>
                        <span>Song: {props.song}</span>
                        <div><span>Author: {props.autor}</span></div>
                    </div>

                    <hr/>
            </div>);
}

export default Song;
