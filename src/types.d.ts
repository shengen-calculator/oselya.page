interface AuthenticationParams {
    email: string
    company: string
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

interface Application {
    email: string,
    firstName: string,
    lastName: string,
    city: string,
    address: string,
    phone: string
}

interface ApplicationError {
    emailError: boolean,
    emailErrorMessage: string,
    firstNameError: boolean,
    firstNameErrorMessage: string,
    lastNameError: boolean,
    lastNameErrorMessage: string,
    cityError: boolean,
    cityErrorMessage: string,
    addressError: boolean,
    addressErrorMessage: string,
    phoneError: boolean,
    phoneErrorMessage: string
}
