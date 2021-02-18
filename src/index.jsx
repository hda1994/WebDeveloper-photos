import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./store/reducers";
import {Provider} from "react-redux";
import {watchLoadAlbums, watchLoadPhotos, watchLoadUsers} from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLoadUsers);
sagaMiddleware.run(watchLoadAlbums);
sagaMiddleware.run(watchLoadPhotos);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);