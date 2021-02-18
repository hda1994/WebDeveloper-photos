import React from 'react';
import {connect} from "react-redux";
import User from "../../components/user/user";

const putStateToProps = (state) => {
    return {
        albums: state.app.albums,
        photos: state.app.photos
    };
};

const putActionsToProps = () => {
    return {};
};

const ContainerUser = (props) => {
    return (
        <User {...props} />
    );
};

export default connect(putStateToProps, putActionsToProps)(ContainerUser);