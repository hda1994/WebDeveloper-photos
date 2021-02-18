import React from 'react';
import {connect} from "react-redux";
import Album from "../../components/album/album";

const putStateToProps = (state) => {
    return {
        photos: state.app.photos,
        users: state.app.users,
    };
};

const putActionsToProps = () => {
    return {};
};

const ContainerAlbum = (props) => {
    return (
        <Album {...props} />
    );
};

export default connect(putStateToProps, putActionsToProps)(ContainerAlbum);