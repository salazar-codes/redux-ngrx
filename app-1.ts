
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
    
    if( action.type === 'INCREMENTAR' ){
        return state += 1;
    }

    return state; // es regla siempre devolver el estado
}

// Usando el reducer
const incrementAction: Action = {
    type: 'INCREMENTAR'
};

console.log(reducer(10, incrementAction));