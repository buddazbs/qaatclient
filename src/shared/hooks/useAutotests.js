import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { setMarkets, setTestRuns, setTestResults, addTestRun, updateTestRun, updateTestResult, } from '@app/slices/autotestsSlice';
import { MOCK_MARKETS, MOCK_TEST_RUNS, MOCK_TEST_RESULTS } from '@shared/data/mockData';
export const useAutotests = () => {
    const dispatch = useAppDispatch();
    const { markets, testRuns, testResults, loading, error } = useAppSelector(state => state.autotests);
    // Загрузка начальных данных
    useEffect(() => {
        dispatch(setMarkets(MOCK_MARKETS));
        dispatch(setTestRuns(MOCK_TEST_RUNS));
        dispatch(setTestResults(MOCK_TEST_RESULTS));
    }, [dispatch]);
    // Загрузка данных из localStorage при инициализации
    useEffect(() => {
        const savedTestRuns = localStorage.getItem('testRuns');
        const savedTestResults = localStorage.getItem('testResults');
        if (savedTestRuns) {
            try {
                const parsedTestRuns = JSON.parse(savedTestRuns);
                dispatch(setTestRuns(parsedTestRuns));
            }
            catch (e) {
                console.error('Ошибка при парсинге testRuns из localStorage', e);
            }
        }
        if (savedTestResults) {
            try {
                const parsedTestResults = JSON.parse(savedTestResults);
                dispatch(setTestResults(parsedTestResults));
            }
            catch (e) {
                console.error('Ошибка при парсинге testResults из localStorage', e);
            }
        }
    }, [dispatch]);
    // Сохранение данных в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('testRuns', JSON.stringify(testRuns));
    }, [testRuns]);
    useEffect(() => {
        localStorage.setItem('testResults', JSON.stringify(testResults));
    }, [testResults]);
    const startTestRun = (marketId) => {
        const existingRun = testRuns.find(run => run.marketId === marketId && run.status === 'running');
        if (existingRun) {
            // Если уже есть запущенные тесты для этого рынка, не запускаем новые
            return;
        }
        const newRun = {
            id: `run-${Date.now()}`,
            marketId,
            status: 'running',
            progress: 0,
            totalTests: Math.floor(Math.random() * 100) + 50,
            passedTests: 0,
            failedTests: 0,
            startTime: new Date().toISOString(),
        };
        dispatch(addTestRun(newRun));
    };
    const stopTestRun = (testRunId) => {
        const updatedRun = testRuns.find(run => run.id === testRunId);
        if (updatedRun) {
            dispatch(updateTestRun(Object.assign(Object.assign({}, updatedRun), { status: 'stopped', endTime: new Date().toISOString() })));
        }
    };
    const rerunTest = (testResultId) => {
        const testResult = testResults.find(result => result.id === testResultId);
        if (!testResult)
            return;
        // Проверяем, не запущен ли уже тест
        if (testResult.status === 'running') {
            return;
        }
        // Обновляем статус теста на "выполняется"
        dispatch(updateTestResult(Object.assign(Object.assign({}, testResult), { status: 'running', actual: 'Running' })));
        // Имитация завершения теста через 3 секунды
        setTimeout(() => {
            const isSuccess = Math.random() > 0.3; // 70% шанс успеха
            dispatch(updateTestResult(Object.assign(Object.assign({}, testResult), { status: isSuccess ? 'passed' : 'failed', actual: isSuccess ? 'Success' : 'Failed', errorMessage: isSuccess ? undefined : 'Test failed due to timeout' })));
        }, 3000);
    };
    return {
        markets,
        testRuns,
        testResults,
        loading,
        error,
        startTestRun,
        stopTestRun,
        rerunTest,
    };
};
