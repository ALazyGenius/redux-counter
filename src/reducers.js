import VARIABLE from './constants';

const initialState  = {
    count: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === VARIABLE.INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        }
    } else if (action.type === VARIABLE.DECREMENT) {
        return {
            ...state,
            count: state.count - 1
        }
    } else if (action.type === VARIABLE.RESET) {
        return {
            ...state,
            count: 0
        }
    } else {
        return state;
    }
}

export default reducer;