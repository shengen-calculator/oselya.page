interface AuthenticationParams {
    email: string
    company: string
    password: string
}

interface MemberRequestParams extends MemberRequest {}

interface RegistrationParams {
    email: string
    password: string
}

interface TokenResult {
    claims: {
        company: string
    }
}

interface MemberRequest {
    email: string,
    firstName: string,
    lastName: string,
    city: string,
    address: string,
    phone: string,
    company: string,
    quantity: string,
    messenger: string
}

interface MemberRequestError {
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
    phoneErrorMessage: string,
    companyError: boolean,
    companyErrorMessage: string,
    quantityError: boolean,
    quantityErrorMessage: string,
    messengerError: boolean,
    messengerErrorMessage: string
}
