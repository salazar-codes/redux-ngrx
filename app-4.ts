import { Store } from "redux";
import { contadorReducer } from "./contador/contador.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { incrementAction } from "./contador/contador.actions";

// deprecado
//const store: Store = createStore(contadorReducer);

const store = configureStore({ reducer: contadorReducer });

store.subscribe(()=>{
    console.log('subs:', store.getState());
});

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);

