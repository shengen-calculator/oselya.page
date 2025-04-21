import storage from "redux-persist/lib/storage";
import {combineReducers} from 'redux';
import authentication from './authenticationReducer';
import {persistReducer} from "redux-persist";
import requisition from "./requisitionReducer";
import apiCallsInProgress from "./apiStatusReducer";

export const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'message',
        'authentication',
        'apiCallsInProgress',
        'requisition'
    ]
};

const authPersistConfig = {
    key: 'authentication',
    storage: storage,
    blacklist: ['logging', 'registering']
};

const rootReducer = combineReducers({
    authentication: persistReducer(authPersistConfig, authentication),
    apiCallsInProgress,
    requisition
})

export default rootReducer;