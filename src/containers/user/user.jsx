import {Link, Route, useParams} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import AlbumCard from "../albumCard/album-card";
import classes from './user.module.css';

function User() {
    const {userId} = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(json => {
                setAlbums(json);
            });
    }, [1]);
    return (
        <div className={`wrapper`}>
            {albums.map(elem =>
                <AlbumCard
                    userId={userId}
                    albumId={elem.id}
                    title={elem.title}/>
            )}
        </div>
    );
}

export default User;

