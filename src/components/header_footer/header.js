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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
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
          boxShadow: 'none',
          padding: '10px 0px',
          backgroundColor: '#fff'
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <div className="header_wrapper">
            <div className="header_logo">
              Murphy Hsieh
              <div className="color-bar" />
            </div>
          </div>
          <div className="web_nav_wrapper">
            <Link to="/works">
              <Button color="black" disableRipple={true}>
                Works
              </Button>
            </Link>

            <Link to="/about">
              <Button color="black" disableRipple={true}>
                About
              </Button>
            </Link>

            <Link to="/resume">
              <Button color="black" disableRipple={true}>
                Resume
              </Button>
            </Link>
          </div>
          <div className="mobile_nav_wrapper">
            <IconButton
              aria-label="Menu"
              color="black"
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
