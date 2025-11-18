import React from 'react';
import { Layout, Dropdown, MenuProps, Space, Switch, Avatar, Badge } from 'antd';
import { 
  MenuOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
  MoonOutlined,
  SunOutlined
} from '@ant-design/icons';
import { useAuth } from '@entities/user/useAuth';
import { useTheme } from '@shared/hooks/useTheme';

const { Header } = Layout;

export const AppHeader: React.FC = () => {
  const { user, logout } = useAuth();
  const { isDarkTheme, toggleTheme } = useTheme();

  const items: MenuProps['items'] = [
    {
      key: 'account',
      icon: <UserOutlined />,
      label: 'Профиль',
      onClick: () => {
        window.location.hash = '#/account';
      },
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Настройки',
      onClick: () => {
        window.location.hash = '#/account';
      },
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Выйти',
      onClick: logout,
    },
  ];

  return (
    <Header style={{ 
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 1,
      background: isDarkTheme ? '#001529' : 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MenuOutlined style={{ fontSize: 18, marginRight: 16 }} />
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>
          IT Стартап Admin
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Space size="middle">
          <Switch
            checked={isDarkTheme}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
          
          <Dropdown menu={{ items }} trigger={['click']}>
            <Badge dot>
              <Avatar 
                src={user?.avatar} 
                icon={<UserOutlined />} 
                style={{ cursor: 'pointer' }}
              />
            </Badge>
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
};