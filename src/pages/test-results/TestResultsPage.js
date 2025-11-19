import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Button, Space, Tag, Typography, Table, message } from 'antd';
import { ReloadOutlined, CheckCircleOutlined, CloseCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { useAutotests } from '@shared/hooks/useAutotests';
const { Title, Text } = Typography;
const getStatusConfig = (status) => {
    switch (status) {
        case 'passed':
            return { color: 'success', text: 'Пройден', icon: _jsx(CheckCircleOutlined, {}) };
        case 'failed':
            return { color: 'error', text: 'Провален', icon: _jsx(CloseCircleOutlined, {}) };
        case 'running':
            return { color: 'processing', text: 'Выполняется', icon: _jsx(SyncOutlined, { spin: true }) };
        default:
            return { color: 'default', text: 'Неизвестно', icon: null };
    }
};
export const TestResultsPage = () => {
    const { markets, testResults, rerunTest } = useAutotests();
    const handleRerunTest = (testResultId) => {
        const testResult = testResults.find(result => result.id === testResultId);
        if (!testResult)
            return;
        // Проверяем, не запущен ли уже тест
        if (testResult.status === 'running') {
            message.warning('Тест уже выполняется');
            return;
        }
        rerunTest(testResultId);
        message.success(`Перезапущен тест: ${testResult.testName}`);
    };
    // Получаем имя рынка по ID
    const getMarketName = (marketId) => {
        const market = markets.find(m => m.id === marketId);
        return market ? market.name : marketId;
    };
    const columns = [
        {
            title: 'Рынок',
            dataIndex: 'marketId',
            key: 'marketId',
            render: (marketId) => getMarketName(marketId),
        },
        {
            title: 'Название теста',
            dataIndex: 'testName',
            key: 'testName',
        },
        {
            title: 'Ожидаемый результат',
            dataIndex: 'expected',
            key: 'expected',
        },
        {
            title: 'Фактический результат',
            dataIndex: 'actual',
            key: 'actual',
            render: (actual, record) => {
                const statusConfig = getStatusConfig(record.status);
                return (_jsxs(Space, { children: [statusConfig.icon, _jsx("span", { children: actual })] }));
            },
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                const statusConfig = getStatusConfig(status);
                return (_jsx(Tag, Object.assign({ color: statusConfig.color, icon: statusConfig.icon, className: status === 'running' ? 'status-tag processing' : 'status-tag' }, { children: statusConfig.text })));
            },
        },
        {
            title: 'Время запуска',
            dataIndex: 'timestamp',
            key: 'timestamp',
            render: (timestamp) => new Date(timestamp).toLocaleString(),
        },
        {
            title: 'Действия',
            key: 'actions',
            render: (_, record) => (_jsx(Button, Object.assign({ type: "primary", icon: _jsx(ReloadOutlined, {}), onClick: () => handleRerunTest(record.id), disabled: record.status === 'running', size: "small" }, { children: "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C" }))),
        },
    ];
    return (_jsxs("div", { children: [_jsx(Title, Object.assign({ level: 2 }, { children: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0430\u0432\u0442\u043E\u0442\u0435\u0441\u0442\u043E\u0432" })), _jsx(Card, { children: _jsx(Table, { dataSource: testResults, columns: columns, pagination: { pageSize: 10 }, rowKey: "id" }) })] }));
};
