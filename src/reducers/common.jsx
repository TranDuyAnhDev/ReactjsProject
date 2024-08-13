/**
Email: longpv@runsystem.net
*/
import * as configType from '@constants/common';

const stateDefault = {
    isLoading: false,
    isFetching: false,
};
const initialState = {
    stateDefault
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case configType.IS_SHOW_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case configType.IS_HIDDEN_LOADING: {
            return {
                ...state,
                isLoading: false
            };
        }
        case configType.RESET: {
            return stateDefault;
        }
        default:
            return initialState;
    }
};

export default reducer;
