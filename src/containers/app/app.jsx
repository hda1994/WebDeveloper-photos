import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    changeActiveFirstTab,
    changeActiveSecondTab,
    changeChooseFabric,
    loadAllFabrics
} from "../../store/shirt-creator/actions";
import ShirtCreator from "../../components/shirt-creator/shirt-creator";


const putStateToProps = (state) => {
    return {
        firstTabs: state.shirtCreator.firstTabs
    };
};

const putActionsToProps = (dispatch) => {
    return {
        changeChooseFabric: bindActionCreators(changeChooseFabric, dispatch)
    };
};


const ContainerShirtCreator = (props) => {
    return (
        <ShirtCreator {...props} />
    );
};

export default connect(putStateToProps, putActionsToProps)(ContainerShirtCreator);
