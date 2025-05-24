import {call, put} from "redux-saga/effects";
import {types} from "../redux/actions/types";
import {CreateMemberRequestAction} from "../redux/actions/memberRequestAction";
import MemberRequestApi from "../api/memberRequest";

export function* createMemberRequest(action: CreateMemberRequestAction)   {
    try {
        yield put({type: types.BEGIN_API_CALL});
        yield call(MemberRequestApi.create, action.params);
        yield put({type: types.CREATE_MEMBER_REQUEST_SUCCESS, params: {...action.params}});
    } catch (e: any) {
        yield put({type: types.API_CALL_ERROR});
        yield put({type: types.CREATE_MEMBER_REQUEST_FAILURE, text: e.message});
    }
}