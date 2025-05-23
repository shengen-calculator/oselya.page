import {functions} from './database';
import { httpsCallable } from "firebase/functions";

class ApplicationApi {
    static createApplication(params: ApplicationParams) {
        const func = httpsCallable(functions, 'postApplication');
        return func(params);
    }
}

export default ApplicationApi;