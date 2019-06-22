import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import { animateScroll } from 'react-scroll';

import Layout from '../../hoc/layout';
import RenderMailMe from '../ui/main_me';

import Ghowa from './ghowa';

class WorkDetail extends Component {
  state = {
    detail: {
      scale: 1
    }
  };

  componentDidMount() {
    const workName = this.props.match.params.work_name;
    this.setState({ workName });

    animateScroll.scrollTo(1, {
      duration: 0
    });
  }

  renderProjectDetail() {
    const { workName } = this.state;
    if (workName === 'ghowa') return <Ghowa />;
  }

  renderEmailSubject() {
    const { workName } = this.state;
    let upperProjectName;
    if (workName === 'ghowa') upperProjectName = 'GHOWA';
    return `I have questions/feedbacks about ${upperProjectName}`;
  }

  showDetail = () => {
    const { detail } = this.state;
    return (
      <Animate
        show={true}
        start={{
          scale: 0.5
          // bottom: 0
        }}
        enter={{
          scale: [detail.scale],
          // bottom: [detail.bottom],
          timing: { duration: 500, ease: easePolyOut }
        }}
      >
        {({ scale }) => (
          <div
            style={{
              background: 'rgba(253, 253, 253, 1)',
              padding: '40px 0px'
            }}
          >
            <div
              className="work-detail-container"
              style={{
                transformOrigin: 'center bottom',
                transform: `scale(${scale}, ${scale})`
              }}
            >
              {this.renderProjectDetail()}
              <div
                className="close-btn"
                onClick={() => this.props.history.go(-1)}
              >
                x
              </div>
              {RenderMailMe(
                '對於此專案，歡迎給我回饋！',
                this.renderEmailSubject()
              )}
            </div>
          </div>
        )}
      </Animate>
    );
  };

  render() {
    return (
      <Layout>
        <div>{this.showDetail()}</div>
      </Layout>
    );
  }
}

export default WorkDetail;
