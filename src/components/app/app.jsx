import {Route} from "react-router-dom";
import React, {useEffect} from 'react';
import Home from "../../containers/home/home";
import User from "../../containers/user/user";
import Album from "../../containers/album/album";
import Photo from "../../containers/photo/photo";

function App(props) {
    const {loadUsers, loadAlbums, loadPhotos} = props;
    useEffect(loadUsers, [1]);
    useEffect(loadAlbums, [1]);
    useEffect(loadPhotos, [1]);
    return (
        <React.Fragment>
            <Route path="/" exact component={Home}/>
            <Route path="/:userId" exact component={User}/>
            <Route path="/:userId/:albumId" component={Album}/>
            <Route path="/:userId/:albumId/:photoId" exact component={Photo}/>
        </React.Fragment>
    );
}

export default App;
