import {all, spawn, takeEvery} from 'redux-saga/effects';
import {LOCATION_CHANGE, LocationChangeAction} from "connected-react-router";


export default function* rootSaga() {
    yield all([
        spawn(pageLoader)
    ])
}

export function* pageLoader() {
    yield takeEvery(LOCATION_CHANGE, loaderWorker)
}

function* loaderWorker({payload}: LocationChangeAction) {
    console.log('1', payload)
}
