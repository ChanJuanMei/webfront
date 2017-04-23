import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { Router, Link } from 'dva/router';
import styles from './MainLayout.less';

const { Header, Content, Footer, Sider } = Layout;

const reg = /^\/(\w+[^/])/;
class MainLayout extends Component {
  state = {
    defaultSelectedKeys: 'home'
  };


  render() {
    const { children, location } = this.props;
    let keys = this.state.defaultSelectedKeys;
    if (location.pathname && reg.test(location.pathname)) {
      keys = reg.exec(location.pathname)[1];
    }
    return (
      <Layout className={styles.layout}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          defaultCollapsed={false}
        >
          <div className={styles.logo}><h3>welcome to my website</h3></div>
          <Menu theme="dark" mode="inline" selectedKeys={[keys]}>
            <Menu.Item key="home">
              <Link to="home">
                <Icon type="user" />
                <span className="nav-text">首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="list">
              <Link to="list">
                <Icon type="video-camera" />
                <span className="nav-text">数据清单</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="user">
              <Link to="user">
                <Icon type="user" />
                <span className="nav-text">用户管理</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>{keys}</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Created by 2017/04/23
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  // Injected by React Router
  children: PropTypes.node // eslint-disable-line
};


export default MainLayout;
