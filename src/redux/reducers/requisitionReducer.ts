import initialState from "./initialState";

export default function requisitionReducer(state = initialState.requisition, action: any): RequisitionState {
    switch (action.type) {

        default:
            return state;
    }
}
