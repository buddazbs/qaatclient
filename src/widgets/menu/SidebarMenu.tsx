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
import { useAuth } from '@entities/user';

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
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Дашборд',
    path: '/dashboard',
    roles: ['admin', 'user'],
  },
  {
    key: 'autotests',
    icon: <BugOutlined />,
    label: 'Автотесты',
    path: '/autotests',
    roles: ['admin'],
  },
  {
    key: 'test-results',
    icon: <BarChartOutlined />,
    label: 'Результаты тестов',
    path: '/test-results',
    roles: ['admin'],
  },
  {
    key: 'callback',
    icon: <SendOutlined />,
    label: 'Отправить коллбэк',
    path: '/callback',
    roles: ['admin', 'user'],
  },
  {
    key: 'account',
    icon: <UserOutlined />,
    label: 'Аккаунт',
    path: '/account',
    roles: ['admin', 'user'],
  },
];

export const SidebarMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
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
      }}
    >
      <div className="logo" style={{ 
        height: 64, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      }}>
        {collapsed ? 'IT' : 'IT Стартап'}
      </div>
      
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
        }}
      />
      
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
      />
    </Sider>
  );
};