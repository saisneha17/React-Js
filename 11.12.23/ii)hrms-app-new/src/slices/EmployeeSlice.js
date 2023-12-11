import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const createEmployee = createAsyncThunk('createEmployee', async (payload) => {
    try {
        const { data } = await axios.post('http://localhost:3008/api/employees', payload);
        return data;
    } catch(error) {
        return error;
    }
});
const employeeSlice = createSlice({
    name: 'employee-slice',
    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(createEmployee.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(createEmployee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
    }
});

export default employeeSlice.reducer;