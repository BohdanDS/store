import {call, takeEvery, put, apply, take, select, fork, takeLatest} from 'redux-saga/effects';
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";
import {loginUser, logOutUser, registerUser} from "./auth";


export function* Authorization() {
    yield takeEvery(AuthActionTypes.START_LOGIN, loginUser)
    yield takeEvery(AuthActionTypes.LOGOUT, logOutUser)
    yield takeEvery(AuthActionTypes.START_REGISTRATION, registerUser)
}