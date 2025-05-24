import storage from "redux-persist/lib/storage";
import {combineReducers} from 'redux';
import authentication from './authenticationReducer';
import {persistReducer} from "redux-persist";
import memberRequest from "./memberRequestReducer";
import apiCallsInProgress from "./apiStatusReducer";

export const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'message',
        'authentication',
        'apiCallsInProgress',
        'memberRequest'
    ]
};

const authPersistConfig = {
    key: 'authentication',
    storage: storage,
    blacklist: ['logging', 'registering', 'error']
};

const rootReducer = combineReducers({
    authentication: persistReducer(authPersistConfig, authentication),
    apiCallsInProgress,
    memberRequest
})

export default rootReducer;