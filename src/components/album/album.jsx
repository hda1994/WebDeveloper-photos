import {Link, useParams} from "react-router-dom";
import React from 'react';
import PhotoCard from "../photoCard/photo-card";
import Header from "../header/header";

function Album(props) {
    const {photos, users} = props;
    const {userId, albumId} = useParams();
    const tmpUser = users.find(elem => elem.id === parseInt(userId, 10));

    return (
        <React.Fragment>
            <Header>
                <Link to="/">All users</Link>
                <Link to={`/${userId}`}>Albums of the user {tmpUser ? tmpUser.name : '...'}</Link>
            </Header>
            <div className={`wrapper`}>
                {photos.filter(elem => elem.albumId === parseInt(albumId, 10)).map(elem =>
                    <PhotoCard {...elem} userId={userId} key={elem.id}/>)
                }
            </div>
        </React.Fragment>
    );
}

export default Album;