import {Link} from "react-router-dom";
import React from 'react';
import classes from './album-card.module.css';

function AlbumCard(props) {
    const {userId, albumId, title, photos} = props;

    let mainPhoto;
    let countPhotos;
    if (photos) {
        let firstPhoto = photos.find(elem => elem.albumId === albumId);
        mainPhoto = firstPhoto ? firstPhoto.thumbnailUrl : null;
        countPhotos = photos.filter(elem => elem.albumId === albumId).length;
    }

    return (
        <Link to={`/${userId}/${albumId}`}>
            <div key={albumId} className={classes.card}>
                <div>
                    <img className={classes.img} src={mainPhoto}/>
                </div>
                <div className={classes.count}>{countPhotos}</div>
                <div className={classes.title}>{title}</div>
            </div>
        </Link>
    );
}

export default AlbumCard;

