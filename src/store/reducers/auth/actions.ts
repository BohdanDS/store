import {AuthActionTypes} from './actions-types'
import {TUser} from "../../../models/user";

export const StartLogin = () => ({
    type: AuthActionTypes.START_LOGIN,
})

export const LoginSuccess = (user: TUser) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    user
})

export const LoginFailed = (error: string) => ({
    type: AuthActionTypes.LOGIN_FAILED,
    error
})