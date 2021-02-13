import {Link, Route, useParams} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import classes from './album.module.css';

function Album() {
    const {userId, albumId} = useParams();
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(json => setPhotos(json));
    }, [1]);
    return (
        <div className={`wrapper`}>
            {photos.map(elem =>
                <Link to={`/${userId}/${albumId}/${elem.id}`}>
                    <div key={elem.id}>
                        <div>{elem.title}</div>
                        <img src={elem.thumbnailUrl}/>
                    </div>
                </Link>)
            }
        </div>
    );
}

export default Album;

