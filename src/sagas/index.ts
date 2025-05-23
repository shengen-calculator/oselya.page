import {takeLatest} from 'redux-saga/effects';
import {types} from "../redux/actions/types";
import {createApplication} from "./applicationSaga";
import {logIn, register} from './authenticationSaga';

function* mySaga() {
    yield takeLatest(types.AUTHENTICATION_REQUEST, logIn);
    yield takeLatest(types.REGISTRATION_REQUEST, register);
    yield takeLatest(types.CREATE_APPLICATION_REQUEST, createApplication);
}

export default mySaga;