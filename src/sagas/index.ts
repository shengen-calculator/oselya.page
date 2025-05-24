import {takeLatest} from 'redux-saga/effects';
import {types} from "../redux/actions/types";
import {createMemberRequest} from "./memberRequestSaga";
import {logIn, register} from './authenticationSaga';

function* mySaga() {
    yield takeLatest(types.AUTHENTICATION_REQUEST, logIn);
    yield takeLatest(types.REGISTRATION_REQUEST, register);
    yield takeLatest(types.CREATE_MEMBER_REQUEST_REQUEST, createMemberRequest);
}

export default mySaga;