import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice";
import cartReducer from "../reducers/cartSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        cart: cartReducer
    }
})