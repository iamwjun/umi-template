import React, { useState } from "react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Breadcrumb } from "antd";
import { Link, Outlet, history } from "umi";
import { SwitchOver } from "@/components/SwitchOver";

import styles from "./index.less";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log("layout", colorBgContainer);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{
        height: 56,
        padding: "0 10px 0 35px",
        boxShadow: '2px 0 6px 0 rgba(0,21,41,0.12)',
        background: colorBgContainer,
        zIndex: 10
      }}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <div className={styles.logoName}>应用管理LOGO</div>
          </div>
          {isLogin ? (
            <div className={styles.user}>
              <span style={{ color: '#333', paddingRight: 10 }} onClick={() => history.push('/')}>
                欢迎你！登录
              </span>
            </div>
          ) : (
            <div className={styles.user}>
              <SwitchOver />
            </div>
          )}
        </div>
      </Header>
      <Layout>
        <Sider trigger={null}
          collapsed={collapsed} 
          collapsedWidth={60}
          style={{
            position: 'relative',
            zIndex: 9,
            boxShadow: '0 1px 4px 0 rgba(0,21,41,.12)',
            background: colorBgContainer,
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            style={{ borderRadius: 0 }}
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Breadcrumb
            style={{ padding: 16 }}
            items={[
              {
                href: "",
                title: <HomeOutlined />,
              },
              {
                href: "",
                title: (
                  <>
                    <UserOutlined />
                    <span>Application List</span>
                  </>
                ),
              },
              {
                title: "Application",
              },
            ]}
          />
          <Content
            style={{
              margin: "0 16px 16px",
              padding: 24,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
