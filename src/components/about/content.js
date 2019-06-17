import React, { Component, Fragment } from 'react';

import Fade from 'react-reveal/Fade';

class Content extends Component {
  state = {
    milestones: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ]
  };

  renderMilestone = () =>
    this.state.milestones.map(milestone => (
      <div className="timeline-milestone" style={{ height: '300px' }}>
        <div className="timeline-date">
          <div className="paragrapah-indicator" />
          go with date indicator
        </div>
        <div className="timeline-content">go with main content</div>
      </div>
    ));

  renderMailMe = () => (
    <Fragment>
      <h1 className="dot-separator">
        <strong>・・・</strong>
      </h1>
      <div className="email-me">
        <p>歡迎直接聯絡我！</p>
        <a href="mailto:hsiehdanny860605@gmail.com">
          hsiehdanny860605@gmail.com
        </a>
      </div>
    </Fragment>
  );

  render() {
    return (
      <Fade delay={600} duration={300} bottom distance="300px" appear={true}>
        <div className="main-content">
          <p>this is main content haha</p>
          <div className="timeline-container">{this.renderMilestone()}</div>
          {this.renderMailMe()}
        </div>
      </Fade>
    );
  }
}

export default Content;
