import {all, spawn, takeEvery,fork} from 'redux-saga/effects';
import {LOCATION_CHANGE, LocationChangeAction} from "connected-react-router";
import {Authorization} from "./auth";


export default function* rootSaga() {
    yield all([
        // spawn(pageLoader),
        fork(Authorization)
    ])
}

export function* pageLoader() {
    yield takeEvery(LOCATION_CHANGE, loaderWorker)
}

function* loaderWorker({payload}: LocationChangeAction) {
    console.log('1', payload)
}
