import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import autotestsReducer from './slices/autotestsSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        autotests: autotestsReducer,
    },
});
export default store;
