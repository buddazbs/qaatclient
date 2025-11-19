import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useRoutes } from 'react-router-dom';
import { AuthPage } from '@pages/auth/AuthPage';
import { DashboardPage } from '@pages/dashboard/DashboardPage';
import { AutotestsPage } from '@pages/autotests/AutotestsPage';
import { TestResultsPage } from '@pages/test-results/TestResultsPage';
import { CallbackPage } from '@pages/callback/CallbackPage';
import { AccountPage } from '@pages/account/AccountPage';
import { useAuth } from '@entities/user/useAuth';
// Компонент для защищенных маршрутов
const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuth, user } = useAuth();
    if (!isAuth) {
        return _jsx(Navigate, { to: "/auth", replace: true });
    }
    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        return _jsxs("div", Object.assign({ style: { padding: 24, textAlign: 'center' } }, { children: [_jsx("h2", { children: "\u0414\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D" }), _jsx("p", { children: "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043F\u0440\u0430\u0432 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B." })] }));
    }
    return _jsx(_Fragment, { children: children });
};
// Компонент для страницы 404
const NotFoundPage = () => {
    return (_jsxs("div", Object.assign({ style: { padding: 24, textAlign: 'center' } }, { children: [_jsx("h2", { children: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" }), _jsx("p", { children: "\u0417\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442." })] })));
};
export const AppRouter = ({ isAuth }) => {
    const { user } = useAuth();
    const routing = useRoutes([
        {
            path: '/',
            element: isAuth ? _jsx(Navigate, { to: "/dashboard" }) : _jsx(Navigate, { to: "/auth" }),
        },
        {
            path: '/auth',
            element: !isAuth ? _jsx(AuthPage, {}) : _jsx(Navigate, { to: "/dashboard" }),
        },
        {
            path: '/dashboard',
            element: (_jsx(ProtectedRoute, { children: _jsx(DashboardPage, {}) })),
        },
        {
            path: '/autotests',
            element: (_jsx(ProtectedRoute, Object.assign({ allowedRoles: ['admin'] }, { children: _jsx(AutotestsPage, {}) }))),
        },
        {
            path: '/test-results',
            element: (_jsx(ProtectedRoute, Object.assign({ allowedRoles: ['admin'] }, { children: _jsx(TestResultsPage, {}) }))),
        },
        {
            path: '/callback',
            element: (_jsx(ProtectedRoute, Object.assign({ allowedRoles: ['admin', 'user'] }, { children: _jsx(CallbackPage, {}) }))),
        },
        {
            path: '/account',
            element: (_jsx(ProtectedRoute, Object.assign({ allowedRoles: ['admin', 'user'] }, { children: _jsx(AccountPage, {}) }))),
        },
        {
            path: '*',
            element: _jsx(NotFoundPage, {}),
        },
    ]);
    return routing;
};
