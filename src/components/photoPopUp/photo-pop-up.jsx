import {Link} from "react-router-dom";
import React from 'react';
import classes from './photo-pop-up.module.css';

function PhotoPopUp(props) {
    const {userId, albumId, title, url, prevPhotoId, nextPhotoId} = props;

    return (
        <Link to={`/${userId}/${albumId}`}>
            <div className={classes.wrapper}>
                <div className={classes.card} onClick={e => e.preventDefault()}>
                    {prevPhotoId ? <Link to={`/${userId}/${albumId}/${prevPhotoId}`}>
                        <div className={`${classes.arrow} ${classes.arrowLeft}`}>{null}</div>
                    </Link> : <div>{null}</div>}
                    <div>
                        <img className={classes.img} src={url}/>
                        <div className={classes.title}>{title}</div>
                    </div>
                    {nextPhotoId ? <Link to={`/${userId}/${albumId}/${nextPhotoId}`}>
                        <div className={`${classes.arrow} ${classes.arrowRight}`}>{null}</div>
                    </Link> : <div>{null}</div>}
                </div>
            </div>
        </Link>
    );
}

export default PhotoPopUp;