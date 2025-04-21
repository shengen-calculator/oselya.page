import {types} from "./types";

export type AuthenticationAction = {
    type: types.AUTHENTICATION_REQUEST
    params: AuthenticationParams
}

export type RegistrationAction = {
    type: types.REGISTRATION_REQUEST
    params: RegistrationParams
}


export function authenticationRequest(params: AuthenticationParams) : AuthenticationAction {
    return { type: types.AUTHENTICATION_REQUEST,  params};
}

export function registrationRequest(params: RegistrationParams): RegistrationAction {
    return { type: types.REGISTRATION_REQUEST, params};
}
