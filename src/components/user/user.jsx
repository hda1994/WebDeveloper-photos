import {Link, useParams} from "react-router-dom";
import React from 'react';
import AlbumCard from "../albumCard/album-card";
import Header from "../header/header";

function User(props) {
    const {albums, photos} = props;
    const {userId} = useParams();

    const albumsFilter = (elem) => {
        return elem.userId === parseInt(userId, 10);
    };

    const albumsMap = (elem) => {
        let firstPhoto = photos.find(elemPh => elemPh.albumId === elem.id);
        let mainPhoto = firstPhoto ? firstPhoto.thumbnailUrl : null;
        let countPhotos = photos.filter(elemPh => elemPh.albumId === elem.id).length;
        return <AlbumCard {...elem} key={elem.id} photos={photos} countPhotos={countPhotos} mainPhoto={mainPhoto}/>;
    };

    return (
        <React.Fragment>
            <Header>
                <Link to="/">All users</Link>
            </Header>
            <div className={`wrapper`}>
                {albums ? albums.filter(albumsFilter).map(albumsMap) : null}
            </div>
        </React.Fragment>
    );
}

export default User;