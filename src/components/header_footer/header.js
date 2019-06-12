import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './sideDrawer';

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#98c5e9',
          boxShadow: 'none',
          padding: '10px 0px ',
          borderBottom: '2px solid #00285e'
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <div
                style={{
                  width: '70px',
                  heihgt: '70px',
                  border: '1px solid',
                  textAlign: 'center'
                }}
              >
                Murphy
              </div>
              {
                //<CityLogo link={true} linkTo="/" width="70px" height="70px" />
              }
            </div>
          </div>
          <div className="web_nav_wrapper">
            <Link to="/works">
              <Button color="inherit">Works</Button>
            </Link>

            <Link to="/about">
              <Button color="inherit">About</Button>
            </Link>

            <Link to="/resume">
              <Button color="inherit">Resume</Button>
            </Link>
          </div>
          <div className="mobile_nav_wrapper">
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
