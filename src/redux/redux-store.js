import {combineReducers, createStore} from "redux";

let reducers = combineReducers({ //функція приходить з redux
    postData:profileReducer,
    dialogsData:dialogsReducer,
    friendsData:sidebarReducer,
});

let store = createStore(reducers);


export default store;