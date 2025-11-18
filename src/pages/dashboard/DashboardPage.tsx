import React from 'react';
import { Card, Typography, Row, Col, Statistic, Space } from 'antd';
import { 
  BugOutlined, 
  CheckCircleOutlined, 
  SyncOutlined, 
  StopOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined
} from '@ant-design/icons';
import { useAuth } from '@entities/user/useAuth';

const { Title } = Typography;

// Моковые данные для статистики
const MOCK_STATS = {
  totalTests: 1247,
  passedTests: 987,
  failedTests: 42,
  runningTests: 18,
  markets: 12,
};

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        Добро пожаловать, {user?.username}!
      </Title>
      
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Всего тестов"
              value={MOCK_STATS.totalTests}
              prefix={<BarChartOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Пройдено"
              value={MOCK_STATS.passedTests}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Провалено"
              value={MOCK_STATS.failedTests}
              prefix={<BugOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Выполняется"
              value={MOCK_STATS.runningTests}
              prefix={<SyncOutlined spin />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title="Обзор тестов" extra={<PieChartOutlined />}>
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <Space direction="vertical" size="large">
                <BarChartOutlined style={{ fontSize: 48, color: '#1890ff' }} />
                <p>График результатов тестов будет отображаться здесь</p>
              </Space>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Статусы" extra={<LineChartOutlined />}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Space>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} />
                  <span>AT: BK - Завершено</span>
                </Space>
              </div>
              <div>
                <Space>
                  <SyncOutlined spin style={{ color: '#1890ff' }} />
                  <span>AT: PB - Выполняется</span>
                </Space>
              </div>
              <div>
                <Space>
                  <StopOutlined style={{ color: '#ff4d4f' }} />
                  <span>AT: NYSE - Остановлено</span>
                </Space>
              </div>
              <div>
                <Space>
                  <BugOutlined style={{ color: '#faad14' }} />
                  <span>AT: LSE - Ошибки</span>
                </Space>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};