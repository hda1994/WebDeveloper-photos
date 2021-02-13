import {combineReducers} from "redux";
import testInputReducer from './test-input/reducers';
import shirtCreatorReducer from './shirt-creator/reducers';


export default combineReducers({
    testInput: testInputReducer,
    shirtCreator: shirtCreatorReducer
});
