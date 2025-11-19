// authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
// Загружаем состояние из sessionStorage
const loadFromSession = () => {
    try {
        const saved = sessionStorage.getItem('auth');
        if (saved) {
            const { user, token } = JSON.parse(saved);
            return {
                user,
                token,
                isAuthenticated: true,
                loading: false,
                error: null,
            };
        }
    }
    catch (_a) {
        // Игнорируем ошибки парсинга
    }
    return {
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    };
};
const initialState = loadFromSession();
export const authSlice = createSlice({
    name: '@@app/auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            sessionStorage.setItem('auth', JSON.stringify({ user: action.payload.user, token: action.payload.token }));
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            sessionStorage.removeItem('auth');
        },
        updateProfile: (state, action) => {
            state.user = action.payload;
            // Обновляем sessionStorage
            const saved = sessionStorage.getItem('auth');
            if (saved) {
                const parsed = JSON.parse(saved);
                parsed.user = action.payload;
                sessionStorage.setItem('auth', JSON.stringify(parsed));
            }
        },
    },
});
export const { loginStart, loginSuccess, loginFailure, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
