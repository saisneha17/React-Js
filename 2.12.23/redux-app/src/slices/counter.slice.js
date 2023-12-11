import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (currentState) => {
            return { value: currentState.value + 1 };
        },
        decrement: (currentState) => {
            return { value: currentState.value - 1};
        },
        reset: () => {
            return { value: 0}
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;