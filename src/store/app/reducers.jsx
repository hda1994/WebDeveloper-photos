import {
    PUT_USERS,
    PUT_ALBUMS,
    PUT_PHOTOS
} from "./actions";


const initialState = {
    users: [1, 2],
    albums: [],
    photos: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_USERS:
            return { ...state, users: action.payload };
        case PUT_ALBUMS:
            return { ...state, albums: action.payload };
        case PUT_PHOTOS:
            return { ...state, photos: action.payload };
    }
    return state;
};
export default rootReducer;