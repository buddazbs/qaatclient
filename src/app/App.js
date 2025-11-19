import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from '@shared/hooks/useTheme';
import { AppRouter } from '@app/providers/router';
import { useAuth } from '@entities/user/useAuth';
import { AppLayout } from '@app/AppLayout';
import '@shared/styles/index.css';
export const App = () => {
    const { isDarkTheme } = useTheme();
    const { isAuth } = useAuth();
    return (_jsx(ConfigProvider, Object.assign({ theme: {
            algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        } }, { children: _jsx(BrowserRouter, { children: isAuth ? (_jsx(AppLayout, { children: _jsx(AppRouter, { isAuth: isAuth }) })) : (_jsx(AppRouter, { isAuth: isAuth })) }) })));
};
