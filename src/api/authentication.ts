import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";
import {auth} from './database';

class AuthenticationApi {
    static logIn(params: AuthenticationParams) {
        return signInWithEmailAndPassword(auth, params.email, params.password);
    }

    static register(params: RegistrationParams) {
        return createUserWithEmailAndPassword(auth, params.email, params.password);
    }

}

export default AuthenticationApi;