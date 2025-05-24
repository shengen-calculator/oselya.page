import initialState from "./initialState";
import {types} from "../actions/types";

export default function memberRequestReducer(state = initialState.memberRequest, action: any): MemberRequestState {
    switch (action.type) {
        case types.CREATE_MEMBER_REQUEST_REQUEST:
            return {
                ...state,
                saving: true,
                saved: false,
                error: ""
            };

        case types.CREATE_MEMBER_REQUEST_SUCCESS:
            return {
                ...state,
                saving: false,
                saved: true
            };

        case types.CREATE_MEMBER_REQUEST_FAILURE:
            return {
                ...state,
                saving: false,
                error: action.text
            };

        default:
            return state;
    }
}
