import React from "react"
import { Link } from "gatsby"

import FooterSite from "./footer"
import { Layout, Menu, Icon } from "antd"
//import "./layout.css"


const {
  Header, Footer, Sider, Content,
} = Layout;

class AppLayout extends React.Component {

  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { location, title, children, page } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }

    return (
      <Layout style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `1200px`,
        minHeight: `100vh`
      }}>
        <Header>{header}</Header>
        <Layout>
          <Sider
            theme="light"
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <div className="logo" />
            < Menu theme="light" mode="inline" defaultSelectedKeys={[page]} >
              <Menu.Item key="home">
                <Link className="sider-menu-link" to="/">
                  <Icon type="home" />
                  <span className="nav-text">Accueil</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link className="sider-menu-link" to="/">
                  <Icon type="user" />
                  <span className="nav-text">A Propos</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="blog">
                <Link className="sider-menu-link" to="/blog/">
                  <Icon type="book" />
                  <span className="nav-text">Blog</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link className="sider-menu-link" to="/contact/">
                  <Icon type="mail" />
                  <span className="nav-text">Contact</span>
                </Link>
              </Menu.Item>
            </Menu >
          </Sider>
          <Content>{children}</Content>
        </Layout>
        <Footer>
          <FooterSite />
        </Footer>
      </Layout>
    )
  }
}

export default AppLayout
