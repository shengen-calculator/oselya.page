import {types} from "./types";

export type CreateMemberRequestAction = {
    type: types.CREATE_MEMBER_REQUEST_REQUEST
    params: MemberRequestParams
}

export function createMemberRequestRequest(params: MemberRequestParams): CreateMemberRequestAction {
    return {type: types.CREATE_MEMBER_REQUEST_REQUEST, params}
}