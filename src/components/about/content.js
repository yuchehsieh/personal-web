import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

class Content extends Component {
  render() {
    return (
      <Fade delay={600} duration={300} bottom distance="300px" appear={true}>
        <div className="main-content" style={{ height: '1000px' }}>
          <p>this is main content haha</p>
          <h1 className="dot-separator">
            <strong>・・・</strong>
          </h1>
          <div className="email-me">
            <p>歡迎直接聯絡我！</p>
            <a href="mailto:hsiehdanny860605@gmail.com">
              hsiehdanny860605@gmail.com
            </a>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Content;
