import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import { useTheme } from '@shared/hooks/useTheme';

describe('useTheme', () => {
  it('should initialize with default theme from localStorage', () => {
    // Устанавливаем темную тему в localStorage
    localStorage.setItem('theme', 'dark');
    
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.isDarkTheme).toBe(true);
  });

  it('should toggle theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    // Переключаем тему с темной на светлую
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.isDarkTheme).toBe(false);
    
    // Переключаем тему обратно на темную
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.isDarkTheme).toBe(true);
  });

  it('should set theme in localStorage', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorage.getItem('theme')).toBe('light');
  });
});