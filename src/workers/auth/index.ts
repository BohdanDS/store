import {call, takeEvery, put, apply, take, select, fork, takeLatest} from 'redux-saga/effects';
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";
import {loginUser, logOutUser, registerUser} from "./auth";


export function* Authorization() {
    yield takeEvery(AuthActionTypes.LOGIN_START, loginUser)
    yield takeEvery(AuthActionTypes.LOGOUT, logOutUser)
    yield takeEvery(AuthActionTypes.REGISTRATION_START, registerUser)
}