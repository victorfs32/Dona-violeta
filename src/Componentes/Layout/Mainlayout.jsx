
;
import {    Layout, theme } from 'antd';


import Sidebar from './Sidebar';
import Headerlayout from './Header';


const {   Content ,Header } = Layout;
const Mainlayout = ({ children, titulo }) => {
 

  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (


    <Layout style={{ minHeight: '100vh' }}>
      {/* HEADER SUPERIOR */}
      <Headerlayout/>
      
      

      <Layout>
        {/* MENU LATERAL */}
        <Sidebar/>
        
        

        <Layout>
          {/* HEADER DO CONTEÚDO */}
          <Header
            style={{
              padding: 0,
              background: '#f9f9f9',
              boxShadow: '0 2px 8px rgba(0, 21, 41, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',


            }}
          >

            <h2 style={{ marginLeft: 16 }}>{titulo}</h2>
           


          </Header>

          {/* CONTEÚDO PRINCIPAL */}
          <Content
            style={{
              margin: '24px 16px',

              minHeight: 280,
              background: '#fbfbfb',
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;