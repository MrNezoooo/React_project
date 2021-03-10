import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";


/*Емітація бази данних*/
/*let dialogsData=[{id:1, name:'Dimych 111'}, {id:2, name:'Andrey 1'}, {id:3, name:'Mykola'}];
let messagesData=[{id:1, message:'Hi 1111'}, {id:2, message:'How are Youb 1'}, {id:3, message:'Yo 1'}];*/
/* ------------------*/

//------Емітація бази данних
/*let dialogsElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
];

let messagesElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
];*/

/*-------*/
/*const newArray =
    dialogsElements.map(dialog => {
        return <DialogItem name={dialogsData.name} id={dialogsData.id} /> });

const newMessage =
    messagesElements.map(message =>{
        return <Message message={messagesData.message} /> });*/
/*----------*/

const Dialogs = (props) => {

    let newArray =
            props.dialogsThreeLevel.map(dialog =>
                     <DialogItem name={dialog.name} id={dialog.id} /> );

    let newMessage =
            props.messagesThreeLevel.map(message =>
                    <Message message={message.message} /> );

    /*---------------------------*/
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    /*---------------------------*/
    return       (
                        <div className={classes.style}>
                            <h3>Відписати:</h3>
                            <div>
                                <div>
                                    <textarea ref={newMessageElement}></textarea>
                                </div>
                                <div>
                                    <button onClick={ addMessage }>Send Message</button>
                                </div>
                            </div>
                             {/*-------dialogs------------*/}
                            <div className={classes.dialogsItems}>


                                {newArray}


                            </div>

                                {/*--------messages-----------*/}
                            <div className={classes.messages}>

                                {newMessage}

                            </div>
                        </div>
    );
}

export default Dialogs;