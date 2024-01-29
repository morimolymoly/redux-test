import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
    counter: {
        value: number
    }
}

export const counterslice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = counterslice.actions;