import {put, takeEvery, call} from 'redux-saga/effects';
import {
    LOAD_ALBUMS, LOAD_PHOTOS, LOAD_USERS,
    putAlbums, putPhotos, putUsers
} from "./store/app/actions";

function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
}

function* workerLoadUsers() {
    const data = yield call(fetchUsers);
    yield put(putUsers(data));
}

export function* watchLoadUsers() {
    yield takeEvery(LOAD_USERS, workerLoadUsers);
}

function fetchAlbums() {
    return fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
}

function* workerLoadAlbums() {
    const data = yield call(fetchAlbums);
    yield put(putAlbums(data));
}

export function* watchLoadAlbums() {
    yield takeEvery(LOAD_ALBUMS, workerLoadAlbums);
}

function fetchPhotos() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
}

function* workerLoadPhotos() {
    const data = yield call(fetchPhotos);
    yield put(putPhotos(data));
}

export function* watchLoadPhotos() {
    yield takeEvery(LOAD_PHOTOS, workerLoadPhotos);
}