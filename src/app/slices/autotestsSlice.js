import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    markets: [],
    testRuns: [],
    testResults: [],
    loading: false,
    error: null,
};
export const autotestsSlice = createSlice({
    name: '@@app/autotests',
    initialState,
    reducers: {
        setMarkets: (state, action) => {
            state.markets = action.payload;
        },
        setTestRuns: (state, action) => {
            state.testRuns = action.payload;
        },
        setTestResults: (state, action) => {
            state.testResults = action.payload;
        },
        addTestRun: (state, action) => {
            state.testRuns.unshift(action.payload);
        },
        updateTestRun: (state, action) => {
            const index = state.testRuns.findIndex(run => run.id === action.payload.id);
            if (index !== -1) {
                state.testRuns[index] = action.payload;
            }
        },
        addTestResult: (state, action) => {
            state.testResults.unshift(action.payload);
        },
        updateTestResult: (state, action) => {
            const index = state.testResults.findIndex(result => result.id === action.payload.id);
            if (index !== -1) {
                state.testResults[index] = action.payload;
            }
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});
export const { setMarkets, setTestRuns, setTestResults, addTestRun, updateTestRun, addTestResult, updateTestResult, setLoading, setError, } = autotestsSlice.actions;
export default autotestsSlice.reducer;
