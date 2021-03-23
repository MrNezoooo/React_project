import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


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

    let state = props.store.getState().dialogs;

    let newArray =
        state.dialogsData.map(dialog =>
                     <DialogItem name={dialog.name} id={dialog.id} /> );

    let newMessage =
        state.messagesData.map(message =>
                    <Message message={message.message} /> );


    // **2**
    let newMessageBody = state.newMessageBody; // весть текст приходить з пропсів
    /*---------------------------*/

    // **1**
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator()) // викликаєм action creator sendMessageCreator
    };

    // **3**
    let onNewMessageChange = (event) => {  //onChang сюди засовує обєкт події event
        let body = event.target.value; // достукаємось до обєкта з добомогою target і взяти вньго значення value
        props.store.dispatch(updateNewMessageBodyCreator(body)) // тепер викликаєм action creator відправляємо це  body в бізнес
    };




   let newMessageElement = React.createRef();


    /*---------------------------*/
    return       (
                        <div className={classes.style}>
                            <h3>Відписати:</h3>
                            <div>
                                <div>
                                    <textarea ref={newMessageElement} value={newMessageBody} onChange={onNewMessageChange}></textarea> {/* **2**value= **3**onChange */}
                                </div> {/*onChange = event (value) */}
                                <div>
                                    <button onClick = { onSendMessageClick }>Send Message</button>
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