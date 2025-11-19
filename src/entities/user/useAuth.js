var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// useAuth.ts
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { loginStart, loginSuccess, loginFailure, logout as logoutAction } from '@app/slices/authSlice';
// Моковые данные пользователей
const MOCK_USERS = [
    {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
        role: 'admin',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    },
    {
        id: '2',
        username: 'user',
        email: 'user@example.com',
        role: 'user',
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
    },
];
export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { user, isAuthenticated, loading, error } = useAppSelector(state => state.auth);
    const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch(loginStart());
        try {
            // Имитация API вызова
            yield new Promise(resolve => setTimeout(resolve, 500));
            const foundUser = MOCK_USERS.find(u => u.username === credentials.username && credentials.password === 'password');
            if (foundUser) {
                const mockToken = `mock-jwt-token-${foundUser.id}`;
                dispatch(loginSuccess({ user: foundUser, token: mockToken }));
                return true;
            }
            else {
                dispatch(loginFailure('Неверное имя пользователя или пароль'));
                return false;
            }
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Произошла неизвестная ошибка';
            dispatch(loginFailure(message));
            return false;
        }
    });
    const logout = () => {
        dispatch(logoutAction());
    };
    return { user, isAuth: isAuthenticated, loading, error, login, logout };
};
