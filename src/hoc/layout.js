import React, { Component } from 'react';

import Header from '../components/header_footer/header2';
import Footer from '../components/header_footer/footer';

import SideDrawer from '../components/header_footer/sideDrawer2';

class Layout extends Component {
  state = {
    showDrawer: false
  };

  handleDrawer = state => {
    this.setState({ showDrawer: state });
  };

  render() {
    return (
      <div>
        <SideDrawer
          show={this.state.showDrawer}
          handleDrawer={this.handleDrawer}
        />
        <Header
          handleDrawer={this.handleDrawer}
          drawerShowed={this.state.showDrawer}
        />
        <div style={{ width: '100vw', height: '10vh' }} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
