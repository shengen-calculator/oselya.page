import {takeLatest, takeEvery} from 'redux-saga/effects';
import {logIn, register} from './authenticationSaga';
import {types} from "../redux/actions/types";


function* mySaga() {
    yield takeLatest(types.AUTHENTICATION_REQUEST, logIn);
    yield takeLatest(types.REGISTRATION_REQUEST, register);
}

export default mySaga;