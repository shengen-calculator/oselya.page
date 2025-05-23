import {call, put} from "redux-saga/effects";
import {types} from "../redux/actions/types";
import {CreateApplicationAction} from "../redux/actions/applicationAction";
import ApplicationApi from "../api/application";

export function* createApplication(action: CreateApplicationAction)   {
    try {
        yield put({type: types.BEGIN_API_CALL});
        yield call(ApplicationApi.createApplication, action.params);
        yield put({type: types.CREATE_APPLICATION_SUCCESS, params: {...action.params}});
    } catch (e: any) {
        yield put({type: types.API_CALL_ERROR});
        yield put({type: types.CREATE_APPLICATION_FAILURE, text: e.message});
    }
}