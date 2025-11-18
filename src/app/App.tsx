import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from '@shared/hooks/useTheme';
import { AppRouter } from '@app/providers/router';
import { useAuth } from '@entities/user/useAuth';
import { AppLayout } from '@app/AppLayout';
import '@shared/styles/index.css';

export const App: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { isAuth } = useAuth();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <BrowserRouter>
        {isAuth ? (
          <AppLayout>
            <AppRouter isAuth={isAuth} />
          </AppLayout>
        ) : (
          <AppRouter isAuth={isAuth} />
        )}
      </BrowserRouter>
    </ConfigProvider>
  );
};