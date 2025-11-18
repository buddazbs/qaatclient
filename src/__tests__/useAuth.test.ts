import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import { useAuth } from '@entities/user/useAuth';

// Мокаем setTimeout для тестов
jest.useFakeTimers();

describe('useAuth', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuth).toBe(false);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should login successfully with valid credentials', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    let loginResult: boolean;
    await act(async () => {
      loginResult = await result.current.login({
        username: 'admin',
        password: 'password',
      });
    });

    expect(loginResult).toBe(true);
    expect(result.current.user).not.toBeNull();
    expect(result.current.user?.username).toBe('admin');
    expect(result.current.isAuth).toBe(true);
  });

  it('should fail login with invalid credentials', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    let loginResult: boolean;
    await act(async () => {
      loginResult = await result.current.login({
        username: 'invalid',
        password: 'wrong',
      });
    });

    expect(loginResult).toBe(false);
    expect(result.current.user).toBeNull();
    expect(result.current.isAuth).toBe(false);
    expect(result.current.error).toBe('Неверное имя пользователя или пароль');
  });

  it('should logout successfully', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    // Сначала логинимся
    await act(async () => {
      await result.current.login({
        username: 'admin',
        password: 'password',
      });
    });

    expect(result.current.isAuth).toBe(true);

    // Затем выходим
    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuth).toBe(false);
  });
});