import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk('fetchAllUsers', async (payload) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        return data;
    } catch(error) {
        return error;
    }
});

const usersSlice = createSlice({
    name: 'UsersSlice',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export default usersSlice.reducer;