import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () =>{
    return( <div>
                <div>
                    <img src='https://picfiles.alphacoders.com/246/thumb-246821.jpg'/>
                </div>
                <div className={classes.descriptionBlock}>
                    ava + description
                </div>
            </div>);
}
export default ProfileInfo;