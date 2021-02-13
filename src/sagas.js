import {put, takeEvery, call } from 'redux-saga/effects';
import {ACTION_LOAD_ALL_FABRICS, putAllFabrics} from "./store/shirt-creator/actions";

function fetchData() {
    return fetch('http://localhost:3001/fabrics')
        .then((response: any) => response.json())
}

function* workerLoadData() {
    const data = yield call(fetchData);
    yield put(putAllFabrics(data));
}

export function* watchLoadData() {
    yield takeEvery(ACTION_LOAD_ALL_FABRICS, workerLoadData);
}