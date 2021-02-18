export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const LOAD_PHOTOS = 'LOAD_PHOTOS';
export const PUT_USERS = 'PUT_USERS';
export const PUT_ALBUMS = 'PUT_ALBUMS';
export const PUT_PHOTOS = 'PUT_PHOTOS';


export const loadUsers = () => {
    return {
        type: LOAD_USERS
    };
};

export const loadAlbums = () => {
    return {
        type: LOAD_ALBUMS
    };
};

export const loadPhotos = () => {
    return {
        type: LOAD_PHOTOS
    };
};

export const putUsers = (data) => {
    return {
        type: PUT_USERS,
        payload: data
    };
};

export const putAlbums = (data) => {
    return {
        type: PUT_ALBUMS,
        payload: data
    };
};

export const putPhotos = (data) => {
    return {
        type: PUT_PHOTOS,
        payload: data
    };
};