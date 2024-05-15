
// Acciones

interface Action {
    type: string;
    payload?: any;
};

// const incrementAction: Action = {
//     type: 'INCREMENTAR'
// };

// Reducer
function reducer(state = 10, action: Action){
    // Todo se debe resolver dentro del reducer, no se debe tener interacción con nada fuera de ella
    switch( action.type ){
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state *= action.payload;
        default:
            return state;
    }
}

// Usando el reducer
const incrementAction: Action = {
    type: 'INCREMENTAR'
};

console.log(reducer(10, incrementAction));

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

console.log(reducer(10, decrementadorAction));

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

console.log(reducer(10, multiplicarAction));