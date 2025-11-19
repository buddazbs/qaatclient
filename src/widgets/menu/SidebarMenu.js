import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layout, Menu, Button, Avatar } from 'antd';
import { LeftOutlined, RightOutlined, DashboardOutlined, BugOutlined, BarChartOutlined, SendOutlined, UserOutlined, } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@entities/user/useAuth';
const { Sider } = Layout;
const menuItems = [
    { key: '/dashboard', icon: _jsx(DashboardOutlined, {}), label: 'Дашборд', path: '/dashboard', roles: ['admin', 'user'] },
    { key: '/autotests', icon: _jsx(BugOutlined, {}), label: 'Автотесты', path: '/autotests', roles: ['admin'] },
    { key: '/test-results', icon: _jsx(BarChartOutlined, {}), label: 'Результаты тестов', path: '/test-results', roles: ['admin'] },
    { key: '/callback', icon: _jsx(SendOutlined, {}), label: 'Отправить коллбэк', path: '/callback', roles: ['admin', 'user'] },
    { key: '/account', icon: _jsx(UserOutlined, {}), label: 'Аккаунт', path: '/account', roles: ['admin', 'user'] },
];
export const SidebarMenu = ({ collapsed, setCollapsed }) => {
    var _a;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const toggleCollapsed = () => setCollapsed(!collapsed);
    const filteredMenuItems = menuItems.filter(item => user && item.roles.includes(user.role));
    // Отделяем последний пункт (аккаунт) в футер.
    const bottomItemIndex = filteredMenuItems.findIndex(i => i.path === '/account');
    const bottomItem = bottomItemIndex !== -1 ? filteredMenuItems[bottomItemIndex] : null;
    const mainItems = filteredMenuItems.filter(i => i.path !== '/account');
    const active = ((_a = filteredMenuItems.find(i => location.pathname === i.path || location.pathname.startsWith(i.path + '/'))) === null || _a === void 0 ? void 0 : _a.path)
        || undefined;
    const handleMenuClick = ({ key }) => {
        navigate(String(key));
    };
    const handleBottomClick = () => {
        if (bottomItem)
            navigate(bottomItem.path);
    };
    return (_jsxs(Sider, Object.assign({ trigger: null, collapsible: true, collapsed: collapsed, collapsedWidth: 64, width: 250, style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 100,
            background: '#0b1b2b',
            boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
            transition: 'width 0.3s ease',
        } }, { children: [_jsxs("div", Object.assign({ style: {
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'space-between',
                    padding: '0 12px',
                    transition: 'all 0.3s ease',
                } }, { children: [!collapsed && (_jsx("div", Object.assign({ style: {
                            color: 'white',
                            fontWeight: 700,
                            fontSize: 18,
                            opacity: collapsed ? 0 : 1,
                            transition: 'opacity 0.3s ease',
                        } }, { children: "QA Payments" }))), _jsx(Button, { type: "primary", onClick: toggleCollapsed, "aria-label": collapsed ? 'Развернуть меню' : 'Свернуть меню', style: {
                            height: 40,
                            minWidth: 40,
                            padding: 0,
                            borderRadius: 8,
                            background: '#1f6f9b',
                            borderColor: '#1f6f9b',
                            boxShadow: '0 1px 0 rgba(0,0,0,0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }, icon: collapsed
                            ? _jsx(RightOutlined, { style: { fontSize: 16, color: 'white' } })
                            : _jsx(LeftOutlined, { style: { fontSize: 16, color: 'white' } }) })] })), _jsx("div", Object.assign({ style: { flex: 1, overflow: 'auto', padding: '8px 8px 0 8px' } }, { children: _jsx(Menu, { theme: "dark", mode: "inline", selectedKeys: active ? [active] : [], onClick: handleMenuClick, items: mainItems.map(item => ({
                        key: item.path,
                        icon: item.icon,
                        label: item.label,
                        style: { fontSize: 16, fontWeight: 600, paddingLeft: 12 },
                    })), style: {
                        background: 'transparent',
                        border: 'none',
                        color: '#e6f7ff',
                        paddingTop: 8,
                        lineHeight: '40px',
                        userSelect: 'none',
                    } }) })), bottomItem && (_jsx("div", Object.assign({ style: {
                    padding: '12px',
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                } }, { children: _jsxs("div", Object.assign({ role: "button", tabIndex: 0, onClick: handleBottomClick, onKeyDown: (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleBottomClick();
                        }
                    }, "aria-label": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442", style: {
                        height: 48,
                        width: collapsed ? 48 : '100%',
                        maxWidth: 220,
                        padding: collapsed ? 0 : '0 12px',
                        borderRadius: 8,
                        background: active === bottomItem.path
                            ? 'rgba(30,144,255,0.12)'
                            : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        gap: 12,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        userSelect: 'none',
                    }, onMouseEnter: (e) => {
                        if (!collapsed && active !== bottomItem.path) {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        }
                    }, onMouseLeave: (e) => {
                        if (!collapsed && active !== bottomItem.path) {
                            e.currentTarget.style.background = 'transparent';
                        }
                    } }, { children: [_jsx("div", Object.assign({ style: {
                                flexShrink: 0,
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '2px solid #1f6f9b',
                                background: '#17364a',
                            } }, { children: _jsx(Avatar, { src: user === null || user === void 0 ? void 0 : user.avatar, icon: _jsx(UserOutlined, {}), size: 40, style: {
                                    width: '100%',
                                    height: '100%',
                                    display: 'block',
                                }, shape: "circle" }) })), !collapsed && (_jsx("span", Object.assign({ style: {
                                color: '#e6f7ff',
                                fontWeight: 600,
                                fontSize: 16,
                                whiteSpace: 'nowrap',
                            } }, { children: bottomItem.label })))] })) })))] })));
};
