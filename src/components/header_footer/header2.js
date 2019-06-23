import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { UiContext } from '../../index';

class Header extends Component {
  render() {
    const currentPath = this.props.location.pathname.substr(1);

    return (
      <UiContext.Consumer>
        {context => (
          <header>
            <div className="header-container">
              <div className="header_wrapper">
                <div className="header_logo">
                  Murphy Hsieh
                  <div className="color-bar" />
                </div>
              </div>
              <div className="web_nav_wrapper">
                <Link to="/works">
                  <p
                    className={
                      currentPath.startsWith('works') ? 'selected' : ''
                    }
                  >
                    Works
                    {console.log(context)}
                  </p>
                </Link>

                <Link to="/about">
                  <p className={currentPath === 'about' ? 'selected' : ''}>
                    About
                  </p>
                </Link>

                <Link to="/resume">
                  <p className={currentPath === 'resume' ? 'selected' : ''}>
                    Resume
                  </p>
                </Link>
              </div>

              <div
                className={`mobile_nav_wrapper ${
                  this.props.drawerShowed ? 'disappear' : ''
                }`}
                onClick={() => this.props.handleDrawer(true)}
              >
                <div className="menu-bar" />
                <div className="menu-bar" />
                <div
                  className="menu-bar"
                  style={{
                    marginBottom: 3
                  }}
                />
              </div>
            </div>
          </header>
        )}
      </UiContext.Consumer>
    );
  }
}

export default withRouter(Header);
