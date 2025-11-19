import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isDarkMode: localStorage.getItem('theme') === 'dark',
};
export const themeSlice = createSlice({
    name: '@@app/theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
        },
        setTheme: (state, action) => {
            state.isDarkMode = action.payload;
            localStorage.setItem('theme', action.payload ? 'dark' : 'light');
        },
    },
});
export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
