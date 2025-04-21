type AuthenticationState = {
    logging: boolean,
    registering: boolean,
    organization: string,
    error: string
}

type RequisitionState = {
    saving: boolean,
    error: string
}

type ApplicationState = {
    authentication: AuthenticationState,
    requisition: RequisitionState,
    apiCallsInProgress: number
}
