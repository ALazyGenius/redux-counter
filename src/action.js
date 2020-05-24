import VARIABLE from './constants';

export const incrementAction = () => ({
    type: VARIABLE.INCREMENT
});

export const decrementAction = () => ({
    type: VARIABLE.DECREMENT
});

export const resetAction = () => ({
    type: VARIABLE.RESET
});