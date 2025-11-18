import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { 
  MenuUnfoldOutlined, 
  MenuFoldOutlined,
  DashboardOutlined,
  BugOutlined,
  BarChartOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@entities/user/useAuth';

const { Sider } = Layout;

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  path: string;
  roles: ('admin' | 'user')[];
}

const menuItems: MenuItem[] = [
  {
    key: '/dashboard',
    icon: <DashboardOutlined />,
    label: 'Дашборд',
    path: '/dashboard',
    roles: ['admin', 'user'],
  },
  {
    key: '/autotests',
    icon: <BugOutlined />,
    label: 'Автотесты',
    path: '/autotests',
    roles: ['admin'],
  },
  {
    key: '/test-results',
    icon: <BarChartOutlined />,
    label: 'Результаты тестов',
    path: '/test-results',
    roles: ['admin'],
  },
  {
    key: '/callback',
    icon: <SendOutlined />,
    label: 'Отправить коллбэк',
    path: '/callback',
    roles: ['admin', 'user'],
  },
  {
    key: '/account',
    icon: <UserOutlined />,
    label: 'Аккаунт',
    path: '/account',
    roles: ['admin', 'user'],
  },
];

export const SidebarMenu: React.FC<{ collapsed: boolean; setCollapsed: (collapsed: boolean) => void }> = ({ 
  collapsed, 
  setCollapsed 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    const item = menuItems.find(i => i.key === key);
    if (item) {
      navigate(item.path);
    }
  };

  // Фильтруем пункты меню в зависимости от роли пользователя
  const filteredMenuItems = menuItems.filter(item => 
    user && item.roles.includes(user.role as 'admin' | 'user')
  );

  return (
    <Sider 
      trigger={null} 
      collapsible 
      collapsed={collapsed}
      width={250}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div className="logo" style={{ 
        height: 64, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        background: 'rgba(255, 255, 255, 0.1)',
        margin: '16px 8px',
        borderRadius: 8,
      }}>
        {collapsed ? 'IT' : 'IT Стартап'}
      </div>
      
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={handleMenuClick}
        items={filteredMenuItems.map(item => ({
          key: item.path,
          icon: item.icon,
          label: item.label,
        }))}
        style={{ 
          background: 'transparent',
          border: 'none'
        }}
      />
      
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          textAlign: 'center',
          color: 'white',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 4,
        }}
      />
    </Sider>
  );
};