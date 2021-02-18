import {useParams} from "react-router-dom";
import React from 'react';
import PhotoPopUp from "../photoPopUp/photo-pop-up";

function Photo(props) {
    const {photos} = props;
    const {userId, albumId, photoId} = useParams();

    const tmpPhotos = photos.filter(elem => elem.albumId === parseInt(albumId, 10));
    const photo = tmpPhotos.find(elem => elem.id === parseInt(photoId, 10));

    const photoIndex = tmpPhotos.indexOf(photo);
    const nextPhotoId = photoIndex < tmpPhotos.length - 1 ? tmpPhotos[photoIndex + 1].id : undefined;
    const prevPhotoId = photoIndex > 0 ? tmpPhotos[photoIndex - 1].id : undefined;

    return (
        <div>
            {photo ?
                <PhotoPopUp {...photo}
                            userId={userId}
                            prevPhotoId={prevPhotoId}
                            nextPhotoId={nextPhotoId}/> : null}
        </div>
    );
}

export default Photo;