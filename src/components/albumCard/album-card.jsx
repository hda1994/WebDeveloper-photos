import {Link} from "react-router-dom";
import React from 'react';
import classes from './album-card.module.css';

function AlbumCard(props) {
    const {userId, id, title, mainPhoto, countPhotos} = props;

    return (
        <Link to={`/${userId}/${id}`}>
            <div className={classes.card}>
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