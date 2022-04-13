import {call, takeEvery, put, apply, take, select, fork, takeLatest} from 'redux-saga/effects';
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";
import {loginUSer} from "./login/login";


export function* Authorization() {
    yield takeLatest(AuthActionTypes.START_LOGIN, loginUSer)

}