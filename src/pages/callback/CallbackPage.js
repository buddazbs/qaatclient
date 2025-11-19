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
import { Card, Form, Select, Input, Button, Space, message, Typography } from 'antd';
import { SendOutlined, WarningOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const { Option } = Select;
// Моковые данные рынков
const MOCK_MARKETS = [
    { id: 'at-bk', name: 'AT: BK' },
    { id: 'at-pb', name: 'AT: PB' },
    { id: 'at-nyse', name: 'AT: NYSE' },
    { id: 'at-lse', name: 'AT: LSE' },
    { id: 'at-tse', name: 'AT: TSE' },
    { id: 'at-fwb', name: 'AT: FWB' },
];
export const CallbackPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const onFinish = (values) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        setError(null);
        try {
            // Валидация данных
            if (!values.market) {
                throw new Error('Пожалуйста, выберите рынок');
            }
            if (!values.transactionId || values.transactionId.trim() === '') {
                throw new Error('Пожалуйста, введите номер транзакции');
            }
            // Имитация API вызова
            yield new Promise(resolve => setTimeout(resolve, 1500));
            // Имитация случайной ошибки для демонстрации
            if (Math.random() < 0.3) {
                throw new Error('Ошибка сервера. Пожалуйста, попробуйте позже.');
            }
            message.success('Коллбэк успешно отправлен');
            form.resetFields();
        }
        catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Произошла неизвестная ошибка';
            setError(errorMessage);
            message.error(errorMessage);
        }
        finally {
            setLoading(false);
        }
    });
    const onFinishFailed = () => {
        message.error('Пожалуйста, заполните все обязательные поля');
    };
    return (_jsxs("div", { children: [_jsx(Title, Object.assign({ level: 2 }, { children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043B\u0431\u044D\u043A" })), _jsx(Card, { children: _jsxs(Form, Object.assign({ form: form, name: "callback", onFinish: onFinish, onFinishFailed: onFinishFailed, layout: "vertical" }, { children: [_jsx(Form.Item, Object.assign({ label: "\u0420\u044B\u043D\u043E\u043A", name: "market", rules: [{ required: true, message: 'Пожалуйста, выберите рынок!' }] }, { children: _jsx(Select, Object.assign({ placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u044B\u043D\u043E\u043A", size: "large" }, { children: MOCK_MARKETS.map(market => (_jsx(Option, Object.assign({ value: market.id }, { children: market.name }), market.id))) })) })), _jsx(Form.Item, Object.assign({ label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438", name: "transactionId", rules: [
                                { required: true, message: 'Пожалуйста, введите номер транзакции!' },
                                { pattern: /^\d+$/, message: 'Номер транзакции должен содержать только цифры' }
                            ] }, { children: _jsx(Input, { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438", size: "large" }) })), error && (_jsx("div", Object.assign({ style: {
                                background: '#fff2f0',
                                border: '1px solid #ffccc7',
                                padding: 12,
                                borderRadius: 4,
                                marginBottom: 16
                            } }, { children: _jsxs(Space, { children: [_jsx(WarningOutlined, { style: { color: '#ff4d4f' } }), _jsx(Text, Object.assign({ type: "danger" }, { children: error }))] }) }))), _jsx(Form.Item, { children: _jsx(Button, Object.assign({ type: "primary", htmlType: "submit", loading: loading, icon: _jsx(SendOutlined, {}), size: "large" }, { children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043B\u0431\u044D\u043A" })) })] })) })] }));
};
