import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layout, Dropdown, Space, Switch, Avatar, Badge, Tooltip, Button } from 'antd';
import { SettingOutlined, LogoutOutlined, UserOutlined, MoonOutlined, SunOutlined, BellOutlined, } from '@ant-design/icons';
import { useAuth } from '@entities/user/useAuth';
import { useTheme } from '@shared/hooks/useTheme';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;
export const AppHeader = () => {
    const { user, logout } = useAuth();
    const { isDarkTheme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    // Явная типизация items. Не использовать `as const`.
    const items = [
        { key: '/account', icon: _jsx(UserOutlined, {}), label: 'Профиль' },
        { key: '/settings', icon: _jsx(SettingOutlined, {}), label: 'Настройки' },
        { type: 'divider' },
        { key: '/logout', icon: _jsx(LogoutOutlined, {}), label: 'Выйти' },
    ];
    // Типизация обработчика по MenuProps['onClick']
    const handleMenuClick = (info) => {
        const { key } = info;
        // key может быть React.Key, приводим к строке
        const path = String(key);
        if (path === '/logout') {
            logout();
            return;
        }
        // Навигация SPA
        navigate(path);
    };
    const menuProps = { items, onClick: handleMenuClick };
    return (_jsxs(Header, Object.assign({ style: {
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 99,
            height: 64,
            background: isDarkTheme ? '#001529' : '#ffffff',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
        } }, { children: [_jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center', gap: 16 } }, { children: [_jsx("div", Object.assign({ style: {
                            width: 40,
                            height: 40,
                            borderRadius: 8,
                            background: '#d915f3ff',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                        } }, { children: "QA" })), _jsx("div", Object.assign({ style: { display: 'flex', flexDirection: 'column', lineHeight: 1 } }, { children: _jsx("div", Object.assign({ style: { fontWeight: 600, fontSize: 28 } }, { children: "Autotest" })) }))] })), _jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center', gap: 12 } }, { children: [_jsx(Tooltip, Object.assign({ title: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F" }, { children: _jsx(Button, { type: "text", icon: _jsx(BellOutlined, {}) }) })), _jsx(Switch, { checked: isDarkTheme, onChange: toggleTheme, checkedChildren: _jsx(MoonOutlined, {}), unCheckedChildren: _jsx(SunOutlined, {}) }), _jsx(Dropdown, Object.assign({ menu: menuProps, trigger: ['click'] }, { children: _jsx(Badge, Object.assign({ dot: false }, { children: _jsxs(Space, Object.assign({ style: { cursor: 'pointer', alignItems: 'center' } }, { children: [_jsx(Avatar, { src: user === null || user === void 0 ? void 0 : user.avatar, icon: _jsx(UserOutlined, {}) }), _jsxs("div", Object.assign({ style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }, { children: [_jsx("div", Object.assign({ style: { fontWeight: 600 } }, { children: (user === null || user === void 0 ? void 0 : user.username) || 'Гость' })), _jsx("div", Object.assign({ style: { fontSize: 12, color: 'rgba(0,0,0,0.45)' } }, { children: (user === null || user === void 0 ? void 0 : user.role) || '' }))] }))] })) })) }))] }))] })));
};
