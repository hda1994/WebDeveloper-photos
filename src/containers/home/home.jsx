import React from 'react';
import {connect} from "react-redux";
import Home from "../../components/home/home";

const putStateToProps = (state) => {
    return {
        users: state.app.users,
    };
};

const putActionsToProps = () => {
    return {};
};

const ContainerHome = (props) => {
    return (
        <Home {...props} />
    );
};

export default connect(putStateToProps, putActionsToProps)(ContainerHome);