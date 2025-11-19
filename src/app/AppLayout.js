import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Layout } from 'antd';
import { SidebarMenu } from '@widgets/menu/SidebarMenu';
import { AppHeader } from '@widgets/menu/Header';
const { Content } = Layout;
export const AppLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (_jsxs(Layout, Object.assign({ style: { minHeight: '100vh' } }, { children: [_jsx(SidebarMenu, { collapsed: collapsed, setCollapsed: setCollapsed }), _jsxs(Layout, Object.assign({ className: collapsed ? 'collapsed' : '', style: {
                    marginLeft: collapsed ? 80 : 250,
                    transition: 'margin-left 0.2s'
                } }, { children: [_jsx(AppHeader, {}), _jsx(Content, Object.assign({ style: {
                            margin: '24px 16px 0',
                            overflow: 'initial',
                            paddingTop: 24
                        } }, { children: _jsx("div", Object.assign({ className: "main-content" }, { children: children })) }))] }))] })));
};
