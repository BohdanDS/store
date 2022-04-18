import {AuthActionTypes} from './actions-types'
import {TUser} from "../../../models/user";

export const StartLogin = (login:string, password:string) => ({
    type: AuthActionTypes.START_LOGIN,
    login,
    password
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

export const StartRegistration = (email:string, userName:string, password:string) => ({
    type: AuthActionTypes.START_REGISTRATION,
    email,
    userName,
    password,
})

export const RegistrationSuccess = (userData: TUser) => ({
    type: AuthActionTypes.REGISTRATION_SUCCESS,
    userData
})

export const RegistrationFailed = (error: string) => ({
    type: AuthActionTypes.REGISTRATION_FAILED,
    error
})