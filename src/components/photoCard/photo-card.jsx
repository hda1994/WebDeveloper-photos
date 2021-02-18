import {Link} from "react-router-dom";
import React from 'react';
import classes from './photo-card.module.css';

function PhotoCard(props) {
    const {userId, albumId, title, id, thumbnailUrl} = props;

    return (
        <Link to={`/${userId}/${albumId}/${id}`} key={id}>
            <div className={classes.card}>
                <div>
                    <img className={classes.img} src={thumbnailUrl}/>
                </div>
                <div className={classes.title}>{title}</div>
            </div>
        </Link>
    );
}

export default PhotoCard;

