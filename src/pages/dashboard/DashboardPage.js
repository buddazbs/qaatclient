import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Typography, Row, Col, Statistic, Space, Avatar } from 'antd';
import { BugOutlined, CheckCircleOutlined, SyncOutlined, BarChartOutlined, PieChartOutlined, LineChartOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '@entities/user/useAuth';
const { Title, Text } = Typography;
// Моковые данные для статистики
const MOCK_STATS = {
    totalTests: 1247,
    passedTests: 987,
    failedTests: 42,
    runningTests: 18,
    markets: 12,
};
// Моковые данные для графиков
const MOCK_CHART_DATA = {
    barData: [
        { name: 'Понедельник', passed: 4000, failed: 2400 },
        { name: 'Вторник', passed: 3000, failed: 1398 },
        { name: 'Среда', passed: 2000, failed: 9800 },
        { name: 'Четверг', passed: 2780, failed: 3908 },
        { name: 'Пятница', passed: 1890, failed: 4800 },
        { name: 'Суббота', passed: 2390, failed: 3800 },
        { name: 'Воскресенье', passed: 3490, failed: 4300 },
    ],
    pieData: [
        { name: 'Пройдено', value: 79 },
        { name: 'Провалено', value: 3 },
        { name: 'Выполняется', value: 1 },
        { name: 'Остановлено', value: 17 },
    ],
    lineData: [
        { name: 'Янв', tests: 400 },
        { name: 'Фев', tests: 600 },
        { name: 'Мар', tests: 800 },
        { name: 'Апр', tests: 1000 },
        { name: 'Май', tests: 1200 },
        { name: 'Июн', tests: 1400 },
    ],
};
export const DashboardPage = () => {
    const { user } = useAuth();
    return (_jsxs("div", { children: [_jsx(Card, Object.assign({ style: { marginBottom: 24 } }, { children: _jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center' } }, { children: [_jsx(Avatar, { size: 64, src: user === null || user === void 0 ? void 0 : user.avatar, icon: _jsx(UserOutlined, {}), style: { marginRight: 16 } }), _jsxs("div", { children: [_jsxs(Title, Object.assign({ level: 3, style: { margin: 0 } }, { children: ["\u0420\u0430\u0434 \u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0441\u043D\u043E\u0432\u0430, ", user === null || user === void 0 ? void 0 : user.username, "!"] })), _jsx(Text, Object.assign({ type: "secondary" }, { children: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0430\u0432\u0442\u043E\u0442\u0435\u0441\u0442\u0430\u043C" }))] })] })) })), _jsxs(Row, Object.assign({ gutter: [16, 16], style: { marginBottom: 24 } }, { children: [_jsx(Col, Object.assign({ xs: 24, sm: 12, lg: 6 }, { children: _jsx(Card, { children: _jsx(Statistic, { title: "\u0412\u0441\u0435\u0433\u043E \u0442\u0435\u0441\u0442\u043E\u0432", value: MOCK_STATS.totalTests, prefix: _jsx(BarChartOutlined, {}), valueStyle: { color: '#3f8600' } }) }) })), _jsx(Col, Object.assign({ xs: 24, sm: 12, lg: 6 }, { children: _jsx(Card, { children: _jsx(Statistic, { title: "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043E", value: MOCK_STATS.passedTests, prefix: _jsx(CheckCircleOutlined, {}), valueStyle: { color: '#3f8600' } }) }) })), _jsx(Col, Object.assign({ xs: 24, sm: 12, lg: 6 }, { children: _jsx(Card, { children: _jsx(Statistic, { title: "\u041F\u0440\u043E\u0432\u0430\u043B\u0435\u043D\u043E", value: MOCK_STATS.failedTests, prefix: _jsx(BugOutlined, {}), valueStyle: { color: '#cf1322' } }) }) })), _jsx(Col, Object.assign({ xs: 24, sm: 12, lg: 6 }, { children: _jsx(Card, { children: _jsx(Statistic, { title: "\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F", value: MOCK_STATS.runningTests, prefix: _jsx(SyncOutlined, { spin: true }), valueStyle: { color: '#1890ff' } }) }) }))] })), _jsxs(Row, Object.assign({ gutter: [16, 16], style: { marginBottom: 24 } }, { children: [_jsx(Col, Object.assign({ xs: 24, lg: 16 }, { children: _jsx(Card, Object.assign({ title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0442\u0435\u0441\u0442\u043E\u0432 \u043F\u043E \u0434\u043D\u044F\u043C", extra: _jsx(BarChartOutlined, { style: { color: '#1890ff' } }) }, { children: _jsx("div", Object.assign({ style: { textAlign: 'center', padding: '40px 0' } }, { children: _jsxs(Space, Object.assign({ direction: "vertical", size: "large" }, { children: [_jsx(BarChartOutlined, { style: { fontSize: 48, color: '#1890ff' } }), _jsxs("div", { children: [_jsx(Title, Object.assign({ level: 4, style: { margin: 0 } }, { children: "\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0442\u0435\u0441\u0442\u043E\u0432" })), _jsx(Text, Object.assign({ type: "secondary" }, { children: "\u0421\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 \u0442\u0435\u0441\u0442\u043E\u0432 \u043F\u043E \u0434\u043D\u044F\u043C" }))] })] })) })) })) })), _jsx(Col, Object.assign({ xs: 24, lg: 8 }, { children: _jsx(Card, Object.assign({ title: "\u0421\u0442\u0430\u0442\u0443\u0441\u044B \u0442\u0435\u0441\u0442\u043E\u0432", extra: _jsx(PieChartOutlined, { style: { color: '#ff4d4f' } }) }, { children: _jsx("div", Object.assign({ style: { textAlign: 'center', padding: '40px 0' } }, { children: _jsxs(Space, Object.assign({ direction: "vertical", size: "large" }, { children: [_jsx(PieChartOutlined, { style: { fontSize: 48, color: '#ff4d4f' } }), _jsxs("div", { children: [_jsx(Title, Object.assign({ level: 4, style: { margin: 0 } }, { children: "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u0432" })), _jsx(Text, Object.assign({ type: "secondary" }, { children: "\u041A\u0440\u0443\u0433\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u0432 \u0442\u0435\u0441\u0442\u043E\u0432" }))] })] })) })) })) }))] })), _jsx(Row, Object.assign({ gutter: [16, 16] }, { children: _jsx(Col, Object.assign({ xs: 24 }, { children: _jsx(Card, Object.assign({ title: "\u0414\u0438\u043D\u0430\u043C\u0438\u043A\u0430 \u0442\u0435\u0441\u0442\u043E\u0432", extra: _jsx(LineChartOutlined, { style: { color: '#52c41a' } }) }, { children: _jsx("div", Object.assign({ style: { textAlign: 'center', padding: '40px 0' } }, { children: _jsxs(Space, Object.assign({ direction: "vertical", size: "large" }, { children: [_jsx(LineChartOutlined, { style: { fontSize: 48, color: '#52c41a' } }), _jsxs("div", { children: [_jsx(Title, Object.assign({ level: 4, style: { margin: 0 } }, { children: "\u0414\u0438\u043D\u0430\u043C\u0438\u043A\u0430 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432" })), _jsx(Text, Object.assign({ type: "secondary" }, { children: "\u041B\u0438\u043D\u0435\u0439\u043D\u044B\u0439 \u0433\u0440\u0430\u0444\u0438\u043A \u0441 \u0434\u0438\u043D\u0430\u043C\u0438\u043A\u043E\u0439 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432" }))] })] })) })) })) })) }))] }));
};
