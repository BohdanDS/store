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
import {ShowNotification} from "../../store/reducers/notification/actions";
import {IUser, TUser} from "../../models/user";
import {AuthAPI} from "../../api/auth";
import {CloseModal} from "../../store/reducers/modals/actions";

export function* loginUser(loginData: any) {
    console.log(loginData)
    put(StartLogin(loginData.login, loginData.password))
    try {
        const {data}: AxiosResponse<IUser> = yield AuthAPI.login(loginData.login, loginData.password)
        yield put(LoginSuccess(data.user))
        yield put(ShowNotification({
            notificationType: "success",
            message: "Welcome back!",
            description: 'Test message XXX'
        }))
        localStorage.setItem('token', data.token)
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

export function* registerUser(registrationData: any) {
    console.log('registerUser', registrationData)
    put(StartRegistration(registrationData.email, registrationData.userName, registrationData.password))
    try {
        const {data}: AxiosResponse<IUser> = yield AuthAPI.userRegistration(registrationData.email, registrationData.userName, registrationData.password)
        console.log(data)
        yield put(RegistrationSuccess(data.user))
        yield put(ShowNotification({
            notificationType: "success",
            message: `Welcome ${data.user.name}`,
            description: 'Test message XXX'
        }))
        localStorage.setItem('token', data.token)
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