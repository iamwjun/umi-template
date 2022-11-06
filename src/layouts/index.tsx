import React from 'react';
import { Layout, Menu } from 'antd';
import { history, IRoute, Link, useOutlet } from 'umi';

import styles from './index.less';

// export default function Layout(props: any) {
//   return (
//     <div className={styles.navs}>
//       <ul>
//         <li>
//           <Link to="/">Hom2e</Link>
//         </li>
//         <li>
//           <Link to="/first">/first</Link>
//         </li>
//         <li>
//           <Link to="/second">/second</Link>
//         </li>
//         <li>
//           <Link to="/three">/three</Link>
//         </li>
//         <li>
//           <a href="https://github.com/umijs/umi">Github</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

interface BasicLayoutProps {
  route: {
    routes: IRoute[];
  };
  children: React.ReactElement;
}

const { Item, SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const a = useOutlet();
  console.log(a);

  const onRedirect = (config: IRoute) => {
    if (config.path) {
      history.push(config.path);
    }
  };

  const generateSubmenu = (item: IRoute) => {
    return item.map((menu: { path: string; title: string }) => (
      <Item key={menu.path} onClick={() => onRedirect(menu)}>
        {menu.title}
      </Item>
    ));
  };

  return <Layout>
  <Header style={{ height: 56, padding: '0 10px 0 35px' }}>
    <div className={styles.info}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            width="196"
            height="25"
            alt="行业云统一管理控制台"
            src="https://gw.alipayobjects.com/mdn/rms_148848/afts/img/A*smmhTrGZw-cAAAAAAAAAAAAAARQnAQ"
          />
        </Link>
      </div>
      <div className={styles.user}>
        <span style={{ color: '#FFF', paddingRight: 10 }}>欢迎你！Developer</span>
      </div>
    </div>
  </Header>
  <Layout>
    <Sider
      trigger={null}
      collapsedWidth={60}
      collapsible
      style={{ position: 'relative', zIndex: 9, boxShadow: '2px 0 6px 0 rgba(0,21,41,0.12)' }}
    >
      <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
        {route.routes.map((item: IRoute) =>
          item.routes && item.routes.length ? (
            <SubMenu key={item.path} title={<span>{item.title}</span>}>
              {generateSubmenu(item.routes)}
            </SubMenu>
          ) : (
            <Item key={item.path} onClick={() => onRedirect(item)}>
              <span>{item.title}</span>
            </Item>
          ),
        )}
      </Menu>
    </Sider>
    <Layout>
      <Content className={styles.masterContent}>{children}</Content>
      <Footer style={{ textAlign: 'center', fontSize: 13, padding: 18 }}>
        ©2021 支付宝（杭州）信息技术有限公司
      </Footer>
    </Layout>
  </Layout>
</Layout>;
};

export default BasicLayout;

