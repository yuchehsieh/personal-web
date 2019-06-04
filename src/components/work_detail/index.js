import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

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
              height: '90vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0,0,0, .3)'
            }}
          >
            <div
              style={{
                width: '80%',
                height: '80%',
                transformOrigin: 'center bottom',
                transform: `scale(${scale}, ${scale})`,
                background: '#fff'
              }}
            />
          </div>
        )}
      </Animate>
    );
  };

  render() {
    return (
      <div>
        work detail
        {this.showDetail()}
      </div>
    );
  }
}

export default WorkDetail;
