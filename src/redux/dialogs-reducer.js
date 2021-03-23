const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.NewMessageBody = action.body; //буде рівне тому що прийде з зовнішнього світу
            return state; //замість braik
        case SEND_MESSAGE:
            let body = state.NewMessageBody; //взяти то що записано в 'UPDATE_NEW_MESSAGE_BODY' присвоюєм йому назву body
            state.NewMessageBody = ''; //зануляєм щоб строка стала пуста
            state.messagesData.push({id: 777, message: body}); //зкопіюєм структуру messagesData: {id:1, message:'How are You'},
            return state; //замість braik

        default:
            return state;  //по замовчуванню якщо  state не повернется
    }
 /*  if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
       state.NewMessageBody = action.body; //буде рівне тому що прийде з зовнішнього світу


    } else if (action.type === 'SEND_MESSAGE') {
        let body = state.NewMessageBody; //взяти то що записано в 'UPDATE_NEW_MESSAGE_BODY' присвоюєм йому назву body
       state.NewMessageBody = ''; //зануляєм щоб строка стала пуста
       state.messagesData.push({id:777, message: body}); //зкопіюєм структуру messagesData: {id:1, message:'How are You'},
    }*/

        //return state;
}

/*-----------action creator-----------------*/
export const sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return ({
        type: 'UPDATE_NEW_MESSAGE_BODY', body: body  // приходить action.body; А локальна перемінна bodyrock
    });
}


export default dialogsReducer;