import initialState from "./initialState";

export default function memberRequestReducer(state = initialState.memberRequest, action: any): MemberRequestState {
    switch (action.type) {

        default:
            return state;
    }
}
