
import { combineReducers } from 'redux';
import * as resetInitialTypes from '@constants/resetInitial';
// import uiReducer from './ui';
import loginReducer from './login';
import commonReducer from './common';
const reducer = combineReducers({
    common: commonReducer,
    login: loginReducer,
});


const rootReducer = (state, action) => {
    let stateTemp = state;
    if (action.type === resetInitialTypes.RESET_INITIAL) {
        stateTemp = undefined;
    }
    return reducer(stateTemp, action);
};

export default rootReducer;
