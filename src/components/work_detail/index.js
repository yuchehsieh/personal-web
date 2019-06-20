import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import { animateScroll } from 'react-scroll';

import Layout from '../../hoc/layout';

class WorkDetail extends Component {
  state = {
    detail: {
      scale: 1
    }
  };

  componentDidMount() {
    const workName = this.props.match.params.work_name;
    this.setState({ workName });
    console.log(workName);

    animateScroll.scrollTo(1, {
      duration: 0
    });
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
          <div style={{ background: '#f7fffd', padding: '40px 0px' }}>
            <div
              className="work-detail-container"
              style={{
                transformOrigin: 'center bottom',
                transform: `scale(${scale}, ${scale})`
              }}
            >
              <div
                className="close-btn"
                onClick={() => this.props.history.go(-1)}
              >
                x
              </div>
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
