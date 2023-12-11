import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employee-slice',
    initialState: {
        isLoading: false,
        employees: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {

    }
});

export default employeeSlice.reducer;