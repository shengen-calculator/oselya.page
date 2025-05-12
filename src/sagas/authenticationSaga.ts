import {call, put} from 'redux-saga/effects';
import {AuthenticationAction, RegistrationAction} from "../redux/actions/authenticationActions";
import AuthenticationApi from "../api/authentication";
import {types} from "../redux/actions/types";

export function* logIn(action: AuthenticationAction) {
    try {
        yield call(AuthenticationApi.logIn, action.params);
        const data: TokenResult = yield call(AuthenticationApi.getTokenResult);
        yield put({type: types.AUTHENTICATION_SUCCESS, data: null});
    } catch (e: any) {
        yield put({type: types.AUTHENTICATION_FAILURE, text: e.message});
    }
}

export function* register(action: RegistrationAction)   {
    try {
        const { user } = yield call(AuthenticationApi.register, action.params);
        yield put({type: types.REGISTRATION_SUCCESS, params: {uid: user.uid}});
    } catch (e: any) {
        yield put({type: types.REGISTRATION_FAILURE, text: e.message});
    }
}
