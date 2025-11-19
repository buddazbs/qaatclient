import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, Row, Col, Button, Space, Tag, Typography, Progress, message } from 'antd';
import { PlayCircleOutlined, StopOutlined, ReloadOutlined, BarChartOutlined, PieChartOutlined, LineChartOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
// Моковые данные рынков
const MOCK_MARKETS = [
    { id: 'at-bk', name: 'AT: BK', status: 'completed', progress: 100, tests: 124, failed: 2 },
    { id: 'at-pb', name: 'AT: PB', status: 'running', progress: 65, tests: 89, failed: 1 },
    { id: 'at-nyse', name: 'AT: NYSE', status: 'stopped', progress: 0, tests: 0, failed: 0 },
    { id: 'at-lse', name: 'AT: LSE', status: 'error', progress: 30, tests: 56, failed: 5 },
    { id: 'at-tse', name: 'AT: TSE', status: 'completed', progress: 100, tests: 78, failed: 0 },
    { id: 'at-fwb', name: 'AT: FWB', status: 'completed', progress: 100, tests: 92, failed: 3 },
];
const getStatusConfig = (status) => {
    switch (status) {
        case 'completed':
            return { color: 'success', text: 'Завершено', icon: _jsx(BarChartOutlined, {}) };
        case 'running':
            return { color: 'processing', text: 'Выполняется', icon: _jsx(ReloadOutlined, { spin: true }) };
        case 'stopped':
            return { color: 'default', text: 'Остановлено', icon: _jsx(StopOutlined, {}) };
        case 'error':
            return { color: 'error', text: 'Ошибки', icon: _jsx(BarChartOutlined, {}) };
        default:
            return { color: 'default', text: 'Неизвестно', icon: null };
    }
};
export const AutotestsPage = () => {
    const [markets, setMarkets] = useState(MOCK_MARKETS);
    const handleStartTest = (marketId) => {
        const market = markets.find(m => m.id === marketId);
        if (market && market.status !== 'running') {
            setMarkets(prev => prev.map(m => m.id === marketId
                ? Object.assign(Object.assign({}, m), { status: 'running', progress: 0 }) : m));
            message.success(`Запущены тесты для ${market.name}`);
        }
        else {
            message.warning('Тесты уже выполняются для этого рынка');
        }
    };
    const handleStopTest = (marketId) => {
        const market = markets.find(m => m.id === marketId);
        if (market && market.status === 'running') {
            setMarkets(prev => prev.map(m => m.id === marketId
                ? Object.assign(Object.assign({}, m), { status: 'stopped', progress: 0 }) : m));
            message.success(`Остановлены тесты для ${market.name}`);
        }
        else {
            message.warning('Нет активных тестов для остановки');
        }
    };
    return (_jsxs("div", { children: [_jsx(Title, Object.assign({ level: 2 }, { children: "\u0410\u0432\u0442\u043E\u0442\u0435\u0441\u0442\u044B \u0438 \u0437\u0430\u043F\u0443\u0441\u043A" })), _jsx(Row, Object.assign({ gutter: [16, 16], style: { marginBottom: 24 } }, { children: markets.map(market => {
                    const statusConfig = getStatusConfig(market.status);
                    return (_jsx(Col, Object.assign({ xs: 24, sm: 12, lg: 8 }, { children: _jsx(Card, Object.assign({ title: _jsxs(Space, { children: [statusConfig.icon, _jsx("span", { children: market.name })] }), extra: _jsx(Tag, Object.assign({ color: statusConfig.color }, { children: statusConfig.text })), actions: [
                                _jsx(Button, Object.assign({ type: "primary", icon: _jsx(PlayCircleOutlined, {}), onClick: () => handleStartTest(market.id), disabled: market.status === 'running' }, { children: "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C" }), "start"),
                                _jsx(Button, Object.assign({ danger: true, icon: _jsx(StopOutlined, {}), onClick: () => handleStopTest(market.id), disabled: market.status !== 'running' }, { children: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C" }), "stop")
                            ] }, { children: _jsxs(Space, Object.assign({ direction: "vertical", style: { width: '100%' } }, { children: [_jsxs("div", { children: [_jsx(Text, Object.assign({ strong: true }, { children: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: " })), _jsx(Progress, { percent: market.progress, status: market.status === 'error' ? 'exception' : 'normal' })] }), _jsxs("div", { children: [_jsx(Text, Object.assign({ strong: true }, { children: "\u0422\u0435\u0441\u0442\u043E\u0432: " })), _jsx(Text, { children: market.tests })] }), _jsxs("div", { children: [_jsx(Text, Object.assign({ strong: true }, { children: "\u041F\u0440\u043E\u0432\u0430\u043B\u0435\u043D\u043E: " })), _jsx(Text, Object.assign({ type: "danger" }, { children: market.failed }))] })] })) })) }), market.id));
                }) })), _jsxs(Row, Object.assign({ gutter: [16, 16] }, { children: [_jsx(Col, Object.assign({ xs: 24, lg: 12 }, { children: _jsx(Card, Object.assign({ title: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u0432", extra: _jsx(BarChartOutlined, {}) }, { children: _jsx("div", Object.assign({ style: { textAlign: 'center', padding: '40px 0' } }, { children: _jsxs(Space, Object.assign({ direction: "vertical", size: "large" }, { children: [_jsx(BarChartOutlined, { style: { fontSize: 48, color: '#1890ff' } }), _jsxs("div", { children: [_jsx(Title, Object.assign({ level: 4, style: { margin: 0 } }, { children: "\u0413\u0440\u0430\u0444\u0438\u043A \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u0432 \u0442\u0435\u0441\u0442\u043E\u0432 \u043F\u043E \u0440\u044B\u043D\u043A\u0430\u043C" })), _jsx(Text, Object.assign({ type: "secondary" }, { children: "\u0421\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u0432 \u043F\u043E \u0440\u044B\u043D\u043A\u0430\u043C" }))] })] })) })) })) })), _jsx(Col, Object.assign({ xs: 24, lg: 12 }, { children: _jsx(Card, Object.assign({ title: "\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u043F\u0430\u0434\u0435\u043D\u0438\u0439", extra: _jsx(PieChartOutlined, {}) }, { children: _jsx("div", Object.assign({ style: { textAlign: 'center', padding: '40px 0' } }, { children: _jsxs(Space, Object.assign({ direction: "vertical", size: "large" }, { children: [_jsx(PieChartOutlined, { style: { fontSize: 48, color: '#ff4d4f' } }), _jsxs("div", { children: [_jsx(Title, Object.assign({ level: 4, style: { margin: 0 } }, { children: "\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0447\u0430\u0441\u0442\u043E\u0442\u044B \u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u0442\u0435\u0441\u0442\u043E\u0432" })), _jsx(Text, Object.assign({ type: "secondary" }, { children: "\u041A\u0440\u0443\u0433\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0447\u0430\u0441\u0442\u043E\u0442\u043E\u0439 \u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u0442\u0435\u0441\u0442\u043E\u0432" }))] })] })) })) })) }))] })), _jsx(Row, Object.assign({ gutter: [16, 16], style: { marginTop: 24 } }, { children: _jsx(Col, Object.assign({ xs: 24 }, { children: _jsx(Card, Object.assign({ title: "\u0414\u0438\u043D\u0430\u043C\u0438\u043A\u0430 \u0442\u0435\u0441\u0442\u043E\u0432", extra: _jsx(LineChartOutlined, {}) }, { children: _jsx("div", Object.assign({ style: { textAlign: 'center', padding: '40px 0' } }, { children: _jsxs(Space, Object.assign({ direction: "vertical", size: "large" }, { children: [_jsx(LineChartOutlined, { style: { fontSize: 48, color: '#52c41a' } }), _jsxs("div", { children: [_jsx(Title, Object.assign({ level: 4, style: { margin: 0 } }, { children: "\u0413\u0440\u0430\u0444\u0438\u043A \u043E\u0431\u0449\u0435\u0439 \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0438 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432" })), _jsx(Text, Object.assign({ type: "secondary" }, { children: "\u041B\u0438\u043D\u0435\u0439\u043D\u044B\u0439 \u0433\u0440\u0430\u0444\u0438\u043A \u0441 \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u043E\u0439 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432" }))] })] })) })) })) })) }))] }));
};
