import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return ( <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>);
}

//------Емітація бази данних
const Message = (props) => {
    return( <div className={classes.message}>
                {props.message}
            </div>);
}

/*Емітація бази данних*/
let dialogsData=[{id:1, name:'Dimych 111'}, {id:2, name:'Andrey 1'}, {id:3, name:'Mykola'}];

let messagesData=[{id:1, message:'Hi 1111'}, {id:2, message:'How are Youb 1'}, {id:3, message:'Yo 1'}];
/* ------------------*/

let dialogsElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
];

let messagesElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
];

/*-------*/
const newArray =
    dialogsElements.map(dialog => {
        return <DialogItem name={dialogsData.name} id={dialogsData.id} /> });

const newMessage =
    messagesElements.map(message =>{
        return <Message message={messagesData.message} /> });
/*----------*/

const Dialogs = (props) => {
    return       (<div className={classes.style}>
                             {/*-------dialogs------------*/}
                            <div className={classes.dialogsItems}>
                                {
                                    [ <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,  /* L:25 бачить як масив */
                                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />]
                                }
                                {dialogsElements}

                                {newArray}

                                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />  {/* L:24 */}
                                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                                <DialogItem name="Nazar" id="1" />
                                <DialogItem name="Petro" id="2" />
                                <div className={classes.dialog}>
                                    <NavLink to="/dialogs/3">Vasyl</NavLink>
                                </div>
                                <div className={classes.dialog}>Lida</div>
                                <div className={classes.dialog}>Ania</div>
                            </div>
                                {/*--------messages-----------*/}
                            <div className={classes.messages}>

                                {newMessage}

                                <Message message={messagesData[0].message} />
                                <Message message={messagesData[1].message} />
                                <Message message={messagesData[2].message} />
                                <Message message="Hi" />
                                <Message message="How are You"/>
                                <Message message="You"/>
                                <div className={classes.message}>"Yo"</div>
                            </div>
                    </div>);
}

export default Dialogs;