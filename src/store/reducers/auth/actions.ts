import {AuthActionTypes} from './actions-types'
import {TUser} from "../../../models/user";

export const StartLogin = () => ({
    type: AuthActionTypes.START_LOGIN,
})

export const LoginSuccess = (userData: TUser) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    userData
})

export const LoginFailed = (error: string) => ({
    type: AuthActionTypes.LOGIN_FAILED,
    error
})

export const Logout = () => ({
    type: AuthActionTypes.LOGOUT
})

export const StartRegistration = () => ({
    type: AuthActionTypes.START_REGISTRATION,
})

export const RegistrationSuccess = (userData: TUser) => ({
    type: AuthActionTypes.REGISTRATION_SUCCESS,
    userData
})

export const RegistrationFailed = (error: string) => ({
    type: AuthActionTypes.REGISTRATION_FAILED,
    error
})