import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter.slice';
import usersReducer from './slices/users.slice';

const store = configureStore({
    reducer: {
        counter: counterReducer, // {value: 0} -> {value: 1}
        users: usersReducer, // {isLoading: false, data: [], error: null}
    }
});

export default store;