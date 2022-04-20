import {AxiosResponse} from "axios";
import {put} from "redux-saga/effects";
import {
    LoginFailed,
    LoginSuccess,
    Logout,
    RegistrationSuccess,
    StartLogin,
    StartRegistration
} from "../../store/reducers/auth/actions";
import {CloseNotification, ShowNotification} from "../../store/reducers/notification/actions";
import {IUser, TUser} from "../../models/user";
import {CloseModal} from "../../store/reducers/modals/actions";
import AuthAPI from "../../api/auth";
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";


export function* loginUser(payload:ReturnType<typeof StartLogin>) {
    put(StartLogin(payload.login, payload.password))
    try {
        const {data}: AxiosResponse<IUser> = yield AuthAPI.login(payload.login, payload.password)
        yield put(LoginSuccess(data.user))
        yield put(ShowNotification({
            notificationType: "success",
            message: "Welcome back!",
            description: 'Test message XXX'
        }))
        localStorage.setItem('token', data.token)
        yield put(CloseNotification())
        yield put(CloseModal())
    } catch (e: any) {
        yield put(LoginFailed(e.response.data.message))
        yield put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}

export function* logOutUser() {
    try {
        yield AuthAPI.logOut()
        put(Logout())
        localStorage.removeItem('token')
    } catch (e) {
        console.dir(e)
    }
}

export function* registerUser(registrationData: ReturnType<typeof StartRegistration>) {
    put(StartRegistration(registrationData.email, registrationData.userName, registrationData.password))
    try {
        const {data}: AxiosResponse<IUser> = yield AuthAPI.userRegistration(registrationData.email, registrationData.userName, registrationData.password)
        yield put(RegistrationSuccess(data.user))
        yield put(ShowNotification({
            notificationType: "success",
            message: `Welcome ${data.user.name}`,
            description: 'Test message XXX'
        }))
        localStorage.setItem('token', data.token)
        yield put(CloseNotification())
        yield put(CloseModal())
    } catch (e: any) {
        yield put(LoginFailed(e.response.data.message))
        yield put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}