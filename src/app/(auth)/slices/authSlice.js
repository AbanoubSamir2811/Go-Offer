import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state) {
            state.status = 'loading';
            state.error = null;
        },
        loginSuccess(state, action) {
            state.status = 'succeeded';
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        loginFailure(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.status = 'idle';
            state.error = null;
        },
    },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
