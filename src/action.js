import VARIABLE from './constants';

export const increment = () => ({
    type: VARIABLE.INCREMENT
});

export const decrement = () => ({
    type: VARIABLE.DECREMENT
});

export const reset = () => ({
    type: VARIABLE.RESET
});