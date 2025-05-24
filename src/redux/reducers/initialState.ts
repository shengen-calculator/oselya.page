const initialState: ApplicationState = {
    authentication: {
        organization: "",
        logging: false,
        registering: false,
        error: ""
    },
    memberRequest: {
        saving: false,
        saved: false,
        error: ""
    },
    apiCallsInProgress: 0
}

export default initialState;