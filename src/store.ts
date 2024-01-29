import { configureStore } from "@reduxjs/toolkit";
import { counterslice } from "./counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterslice.reducer,
    },
});