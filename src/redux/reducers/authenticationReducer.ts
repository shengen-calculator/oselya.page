import initialState from './initialState';
import {types} from "../actions/types";

export default function authenticationReducer(state = initialState.authentication, action: any): AuthenticationState {
    switch (action.type) {

        case types.AUTHENTICATION_REQUEST:
            return {
                ...state,
                error: "",
                logging: true
            };

        case types.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                organization: action.data.organization,
                logging: false
            };

        case types.AUTHENTICATION_FAILURE:
            return {
                ...state,
                organization: "",
                error: action.text,
                logging: false
            };

        case types.REGISTRATION_REQUEST:
            return {
                ...state,
                error: "",
                registering: true
            };

        case types.REGISTRATION_SUCCESS:
            return {
                ...state,
                registering: false
            };

        case types.REGISTRATION_FAILURE:
            return {
                ...state,
                error: action.text,
                registering: false
            };

        default:
            return state;
    }
}
