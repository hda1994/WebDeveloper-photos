import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadUsers} from "../../store/app/actions";
import Home from "../../components/home/home";



const putStateToProps = (state) => {
    return {
        users: state.app.users,
        albums: state.app.albums,
        photos: state.app.photos
    };
};

const putActionsToProps = (dispatch) => {
    return {
        loadUsers: bindActionCreators(loadUsers, dispatch)
    };
};


const ContainerHome = (props) => {
    return (
        <Home {...props} />
    );
};

export default connect(putStateToProps, putActionsToProps)(ContainerHome);
