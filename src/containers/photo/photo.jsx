import React from 'react';
import {connect} from "react-redux";
import Photo from "../../components/photo/photo";

const putStateToProps = (state) => {
    return {
        photos: state.app.photos,
        albums: state.app.albums,
        users: state.app.users
    };
};

const putActionsToProps = () => {
    return {};
};

const ContainerPhoto = (props) => {
    return (
        <Photo {...props} />
    );
};

export default connect(putStateToProps, putActionsToProps)(ContainerPhoto);