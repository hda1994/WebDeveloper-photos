import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import App from "../../components/app/app";
import {loadAlbums, loadPhotos, loadUsers} from "../../store/app/actions";

const putStateToProps = () => {
    return {};
};

const putActionsToProps = (dispatch) => {
    return {
        loadUsers: bindActionCreators(loadUsers, dispatch),
        loadAlbums: bindActionCreators(loadAlbums, dispatch),
        loadPhotos: bindActionCreators(loadPhotos, dispatch),
    };
};

const ContainerApp = (props) => {
    return (
        <App {...props} />
    );
};

export default connect(putStateToProps, putActionsToProps)(ContainerApp);