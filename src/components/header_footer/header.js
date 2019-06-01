import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Header extends Component {
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

          <Link to="/collections">
            <Button color="inherit">Collections</Button>
          </Link>

          <Link to="/resume">
            <Button color="inherit">Resume</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
