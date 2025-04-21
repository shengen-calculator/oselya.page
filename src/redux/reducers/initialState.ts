const initialState: ApplicationState = {
    authentication: {
        organization: "",
        logging: false,
        registering: false,
        error: ""
    },
    requisition: {
        saving: false,
        error: ""
    },
    apiCallsInProgress: 0
}

export default initialState;