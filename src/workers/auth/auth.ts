import {AxiosResponse} from "axios";
import {put} from "redux-saga/effects";
import {LoginFailed, LoginSuccess, Logout} from "../../store/reducers/auth/actions";
import {ShowNotification} from "../../store/reducers/notification/actions";
import {IUser} from "../../models/user";
import {AuthAPI} from "../../api/auth";

export function* loginUser(loginData: any) {
    try {
        const {data}: AxiosResponse<IUser> = yield AuthAPI.login(loginData.login, loginData.password)
        yield put(LoginSuccess(data.user))
        yield put(ShowNotification({
            notificationType: "success",
            message: "Welcome back!",
            description: 'Test message XXX'
        }))
        localStorage.setItem('token', data.token)
    } catch (e: any) {
        yield put(LoginFailed(e.response.data.message))
        yield put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}

export function* logOutUser(){
    yield AuthAPI.logOut()
    put(Logout())
    localStorage.removeItem('token')
}