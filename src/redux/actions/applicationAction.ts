import {types} from "./types";

export type CreateApplicationAction = {
    type: types.CREATE_APPLICATION_REQUEST
    params: ApplicationParams
}

export function createApplicationRequest(params: ApplicationParams): CreateApplicationAction {
    return {type: types.CREATE_APPLICATION_REQUEST, params}
}