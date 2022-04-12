import {InferValueTypes} from "../../../models/common";
import * as actions from "../auth/actions";
import {AuthActionTypes} from "./actions-types";
import {TUser} from "../../../models/user";

export type TAuthState = {
    user: TUser| {},
    isAuth: boolean
    error: null | string,
    isLoading: boolean
}

const initialState: TAuthState = {
    user: {},
    isAuth: false,
    error: null,
    isLoading: false
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): TAuthState {
    switch (action.type) {
        case AuthActionTypes.START_LOGIN: {
            return {...state, isLoading: true}
        }
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {...state, ...action.user, isLoading: false, isAuth: true}
        }
        case AuthActionTypes.LOGIN_FAILED: {
            return {...state, isAuth: false, isLoading: false, error: action.error}
        }
        default:
            return state
    }
}