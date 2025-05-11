import { Menu, Layout, theme } from "antd";

import {

  UserOutlined,
  HomeOutlined,
  BarcodeOutlined,
  ShoppingCartOutlined,
  SettingOutlined

} from '@ant-design/icons';
import {  NavLink } from 'react-router';
import { useState } from "react";

const {  Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
    token: { colorBgContainer },
  } = theme.useToken();
    

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} style={{ background: colorBgContainer, }} >
          <div
            style={{
              height: '100px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',




            }}
          >
            <img
              src=""
              // substitua com o caminho da sua imagem
              alt="Logo"
              style={{

                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}


            />
          </div>
          <Menu

            style={{ height: '100%', borderRight: 0 }}
            mode="inline"
            items={[
              {
                key: 'home',
                icon: <HomeOutlined />,
                label: <NavLink to="/">Home</NavLink>,
              },
              {
                key: 'produtos',
                icon: <BarcodeOutlined />,
                label: <NavLink to="/produtos">Produtos</NavLink>,
              },
              {
                key: 'pedidos',
                icon: <ShoppingCartOutlined />,
                label: <NavLink to="/pedidos">Pedidos</NavLink>,
              },
              {
                key: 'clientes',
                icon: <UserOutlined />,
                label: <NavLink to="/clientes">Clientes</NavLink>,
              },
              {
                key: 'configurações',
                icon: <SettingOutlined />,
                label: <NavLink to="/configuracao">Configurações</NavLink>,
              },
            ]}
          />
        </Sider>
        
        
    );
}


export default Sidebar;