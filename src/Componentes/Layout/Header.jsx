import { Avatar,  Dropdown,   Row, Layout  } from 'antd'
import {  UserOutlined,LoginOutlined} from '@ant-design/icons';
import { Link } from 'react-router';

const Headerlayout = () => {
  const {   Header } = Layout;
    const items = [
    {
      label: (
        <Link to='#'>
          Sair
        </Link>

      ),
      icon: <LoginOutlined />,
      key: '0',
    },



  ];
    return (
        <Header
        style={{
          background: '#7F1CAA',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Row justify="space-between" align="middle" style={{ width: '100%' }}>
          <h1 style={{ color: '#fff', margin: 0 }}>Dona Violeta</h1>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>

              <Avatar style={{ background: '#1890ff' }} size="large" icon={<UserOutlined />} />
            </a>
          </Dropdown>
        </Row>

      </Header>
        
        
    );
}


export default Headerlayout;