import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Slices/cartSlice"; // Named import

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});
