import {Link, Route, useParams} from "react-router-dom";
import React, {useState, useEffect} from 'react';

function Photo() {
    const {userId, albumId, photoId} = useParams();
    const [photo, setPhoto] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?id=${photoId}`)
            .then(response => response.json())
            .then(json => setPhoto(json[0]));
    }, [1]);
    return (
        <div>
            {photo ?
                <div>
                    <div> prev </div>
                    <div>{photo.title}</div>
                    <img src={photo.url}/>
                    <div> next </div>
                </div> : null}
        </div>
    );
}

export default Photo;

