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
import { useState } from 'react';
import { Card, Form, Input, Button, Space, Avatar, Upload, message, Typography } from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';
import { useAuth } from '@entities/user/useAuth';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
export const AccountPage = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState((user === null || user === void 0 ? void 0 : user.avatar) || '');
    const navigate = useNavigate();
    const onFinishProfile = (values) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            // Имитация API вызова
            yield new Promise(resolve => setTimeout(resolve, 1000));
            message.success('Профиль успешно обновлен');
        }
        catch (error) {
            message.error('Ошибка обновления профиля');
        }
        finally {
            setLoading(false);
        }
    });
    const onFinishPassword = (values) => __awaiter(void 0, void 0, void 0, function* () {
        if (values.newPassword !== values.confirmNewPassword) {
            message.error('Пароли не совпадают');
            return;
        }
        setLoading(true);
        try {
            // Имитация API вызова
            yield new Promise(resolve => setTimeout(resolve, 1000));
            message.success('Пароль успешно изменен');
        }
        catch (error) {
            message.error('Ошибка изменения пароля');
        }
        finally {
            setLoading(false);
        }
    });
    const handleAvatarChange = (info) => {
        if (info.file.status === 'done') {
            // Имитация загрузки аватара
            setAvatarUrl('https://api.dicebear.com/7.x/miniavs/svg?seed=' + Math.floor(Math.random() * 100));
            message.success('Аватар успешно загружен');
        }
        else if (info.file.status === 'error') {
            message.error('Ошибка загрузки аватара');
        }
    };
    return (_jsxs("div", { children: [_jsx(Title, Object.assign({ level: 2 }, { children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430" })), _jsx(Card, { children: _jsxs(Space, Object.assign({ align: "start", style: { marginBottom: 24 } }, { children: [_jsx(Avatar, { size: 100, src: avatarUrl, icon: _jsx(UserOutlined, {}) }), _jsxs("div", { children: [_jsx(Upload, Object.assign({ showUploadList: false, beforeUpload: () => false, onChange: handleAvatarChange }, { children: _jsx(Button, Object.assign({ icon: _jsx(UploadOutlined, {}) }, { children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440" })) })), _jsx("p", Object.assign({ style: { marginTop: 8, color: '#888' } }, { children: "JPG, PNG \u0438\u043B\u0438 GIF, \u043C\u0430\u043A\u0441. 2MB" }))] })] })) }), _jsx(Card, Object.assign({ title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F", style: { marginTop: 24 } }, { children: _jsxs(Form, Object.assign({ name: "profile", onFinish: onFinishProfile, layout: "vertical", initialValues: {
                        username: user === null || user === void 0 ? void 0 : user.username,
                        email: user === null || user === void 0 ? void 0 : user.email,
                    } }, { children: [_jsx(Form.Item, Object.assign({ label: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", name: "username", rules: [{ required: true, message: 'Пожалуйста, введите имя пользователя!' }] }, { children: _jsx(Input, { prefix: _jsx(UserOutlined, {}), size: "large" }) })), _jsx(Form.Item, Object.assign({ label: "Email", name: "email", rules: [
                                { required: true, message: 'Пожалуйста, введите email!' },
                                { type: 'email', message: 'Пожалуйста, введите корректный email!' }
                            ] }, { children: _jsx(Input, { size: "large" }) })), _jsx(Form.Item, { children: _jsx(Button, Object.assign({ type: "primary", htmlType: "submit", loading: loading, icon: _jsx(SaveOutlined, {}), size: "large" }, { children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })) })] })) })), _jsx(Card, Object.assign({ title: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F", style: { marginTop: 24 } }, { children: _jsxs(Form, Object.assign({ name: "password", onFinish: onFinishPassword, layout: "vertical" }, { children: [_jsx(Form.Item, Object.assign({ label: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", name: "oldPassword", rules: [{ required: true, message: 'Пожалуйста, введите текущий пароль!' }] }, { children: _jsx(Input.Password, { prefix: _jsx(LockOutlined, {}), size: "large" }) })), _jsx(Form.Item, Object.assign({ label: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", name: "newPassword", rules: [{ required: true, message: 'Пожалуйста, введите новый пароль!' }] }, { children: _jsx(Input.Password, { prefix: _jsx(LockOutlined, {}), size: "large" }) })), _jsx(Form.Item, Object.assign({ label: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", name: "confirmNewPassword", rules: [{ required: true, message: 'Пожалуйста, подтвердите новый пароль!' }] }, { children: _jsx(Input.Password, { prefix: _jsx(LockOutlined, {}), size: "large" }) })), _jsx(Form.Item, { children: _jsx(Button, Object.assign({ type: "primary", htmlType: "submit", loading: loading, icon: _jsx(SaveOutlined, {}), size: "large" }, { children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C" })) })] })) }))] }));
};
