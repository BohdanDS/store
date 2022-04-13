import {all, fork} from 'redux-saga/effects';
import {Authorization} from "./auth";


export default function* rootSaga() {
    yield all([
        fork(Authorization)
    ])
}

