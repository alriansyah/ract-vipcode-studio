import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;


// reducer
const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    })
})

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, builder => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
})


// store
const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer,
    }
})
console.log("oncreate store : ", store.getState());


// susbscribe
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
})


// dispatch
const action1 = addToCart({ id: 1, qty: 20 });
store.dispatch(action1);
store.dispatch(addToCart({ id: 2, qty: 30 }));

store.dispatch(login());