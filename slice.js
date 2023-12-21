import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// reducer
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        }
    }
})


// store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})
console.log("oncreate store : ", store.getState());


// susbscribe
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
})


// dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));