import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Router, Link } from 'dva/router';
import styles from './MainLayout.less';

class MainLayout extends Component {
  state = {
  };

  render() {
    const { children, location } = this.props;

    return (
      <Layout className={styles.layout}>
        <asider
          trigger={null}
          collapsible>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline">
            <Menu.Item key="home">
              <Link to="home">
                <Icon type="pie-chart" />
                <span className="nav-text">工作台</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="users">
              <Link to="users">
                <Icon type="user" />
                <span className="nav-text">用户管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="services">
              <Link to="services">
                <Icon type="video-camera" />
                <span className="nav-text">服务列表</span>
              </Link>
            </Menu.Item>
          </Menu>
        </asider>
        <Layout>
          <header>
            <Icon
              className="trigger" />
          </header>
          <content>
            {children}
          </content>
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
