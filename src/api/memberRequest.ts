import {functions} from './database';
import { httpsCallable } from "firebase/functions";

class MemberRequestApi {
    static create(params: MemberRequestParams) {
        const func = httpsCallable(functions, 'postMemberRequest');
        return func(params);
    }
}

export default MemberRequestApi;