var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '@entities/user/useAuth';
import DarkVeil from '@shared/animations/background/DarkVeil';
import './AuthPage.css';
const { Title } = Typography;
export const AuthPage = () => {
    const [loading, setLoading] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const onFinish = (values) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            const success = yield login(values);
            if (success) {
                message.success('Успешная авторизация');
                navigate('/dashboard');
            }
            else {
                message.error('Неверное имя пользователя или пароль');
            }
        }
        catch (_a) {
            message.error('Ошибка авторизации');
        }
        finally {
            setLoading(false);
        }
    });
    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 100);
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs("div", Object.assign({ style: { width: '100%', height: '100vh', position: 'relative', background: '#0c1018' } }, { children: [_jsx(DarkVeil, {}), _jsx("div", Object.assign({ style: {
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                } }, { children: _jsxs(Card, Object.assign({ style: {
                        width: 420,
                        borderRadius: 12,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                        background: 'rgba(20,28,38,0.85)',
                        pointerEvents: 'all',
                        opacity: fadeIn ? 1 : 0,
                        transform: fadeIn ? 'translateY(0px)' : 'translateY(-20px)',
                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                        color: '#fff',
                    } }, { children: [_jsxs("div", Object.assign({ style: { textAlign: 'center', marginBottom: 24 } }, { children: [_jsx(Title, Object.assign({ level: 2, style: { color: '#fff' } }, { children: "QA Payments" })), _jsx("p", Object.assign({ style: { color: '#ccc' } }, { children: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043E\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C" }))] })), _jsxs(Form, Object.assign({ name: "auth", onFinish: onFinish, autoComplete: "off" }, { children: [_jsx(Form.Item, Object.assign({ name: "username", rules: [{ required: true, message: 'Пожалуйста, введите имя пользователя!' }] }, { children: _jsx(Input, { className: "input-dark", prefix: _jsx(UserOutlined, { style: { color: '#fff' } }), placeholder: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", size: "large", style: { background: 'rgba(255,255,255,0.05)', color: '#fff', border: 'none' } }) })), _jsx(Form.Item, Object.assign({ name: "password", rules: [{ required: true, message: 'Пожалуйста, введите пароль!' }] }, { children: _jsx(Input, { className: "input-dark", prefix: _jsx(LockOutlined, { style: { color: '#fff' } }), type: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", size: "large", style: { background: 'rgba(255,255,255,0.05)', color: '#fff', border: 'none' } }) })), _jsx(Form.Item, { children: _jsx(Button, Object.assign({ type: "primary", htmlType: "submit", loading: loading, block: true, size: "large", style: {
                                            background: '#1f6f9b',
                                            borderColor: '#1f6f9b',
                                            fontWeight: 600,
                                            color: '#fff',
                                        } }, { children: "\u0412\u043E\u0439\u0442\u0438" })) })] })), _jsxs("div", Object.assign({ style: { textAlign: 'center', marginTop: 16 } }, { children: [_jsx("p", Object.assign({ style: { color: '#ccc' } }, { children: _jsx("strong", { children: "\u0414\u0435\u043C\u043E \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435:" }) })), _jsx("p", Object.assign({ style: { color: '#ccc' } }, { children: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440: admin / password" })), _jsx("p", Object.assign({ style: { color: '#ccc' } }, { children: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C: user / password" }))] }))] })) }))] })));
};
