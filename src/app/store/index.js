import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../(auth)/slices/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Adjust if necessary for non-serializable actions
    }),
});

export default store;
