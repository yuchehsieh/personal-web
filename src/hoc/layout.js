import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Header from '../components/header_footer/header';
import Footer from '../components/header_footer/footer';

const Layout = props => {
  return (
    <div>
      <Header />
      <AppBar position="fixed" />
      <Toolbar style={{ padding: '10px' }} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
