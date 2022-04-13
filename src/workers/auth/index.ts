import {call, takeEvery, put, apply, take, select, fork, takeLatest} from 'redux-saga/effects';
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";
import {loginUser, logOutUser} from "./auth";


export function* Authorization() {
    yield takeLatest(AuthActionTypes.START_LOGIN, loginUser)
    yield takeLatest(AuthActionTypes.LOGOUT, logOutUser)
}