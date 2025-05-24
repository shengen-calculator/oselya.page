type AuthenticationState = {
    logging: boolean,
    registering: boolean,
    organization: string,
    error: string
}

type MemberRequestState = {
    saving: boolean,
    saved: boolean,
    error: string
}

type ApplicationState = {
    authentication: AuthenticationState,
    memberRequest: MemberRequestState,
    apiCallsInProgress: number,
}
