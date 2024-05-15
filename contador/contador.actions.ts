import { Action } from '../ngrx-fake/ngrx';

export const incrementAction: Action = {
    type: 'INCREMENTAR'
};

export const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

export const resetAction: Action = {
    type: 'RESET'
};