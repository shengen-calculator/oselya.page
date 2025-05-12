interface AuthenticationParams {
    email: string
    password: string
}

interface RegistrationParams {
    email: string
    password: string
}

interface TokenResult {
    claims: {
        company: string
    }
}