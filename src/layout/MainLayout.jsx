import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Router, Link } from 'dva/router';
import styles from './MainLayout.less';

const { Header, Sider, Content } = Layout;

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
          trigger={null}
          collapsible>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline">
            <Menu.Item key="home">
              <Link to="home">
                <Icon type="pie-chart" />
                <span className="nav-text">首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="list">
              <Link to="list">
                <Icon type="video-camera" />
                <span className="nav-text">列表</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>

          <Content>
            {children}
          </Content>
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
