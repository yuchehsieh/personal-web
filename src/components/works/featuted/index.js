import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

import Fade from 'react-reveal/Reveal';

class Featured extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.state = {
      cards: [
        {
          id: 0,
          background: '#BF4E30'
        },
        {
          id: 1,
          background: '#C6CCB2'
        },
        {
          id: 2,
          background: '#093824'
        },
        {
          id: 3,
          background: '#093824'
        },
        {
          id: 4,
          background: '#093824'
        }
      ]
    };
  }

  componentDidMount() {}

  showCards = () =>
    this.state.cards ? (
      <NodeGroup
        data={this.state.cards}
        keyAccessor={d => d.id}
        start={() => ({
          opacity: 0,
          y: 100
        })}
        enter={(d, i) => ({
          opacity: [1],
          y: [0],
          timing: { duration: 500, delay: i * 200, ease: easePolyOut }
        })}
        update={(d, i) => ({
          opacity: [1],
          y: [0],
          timing: { duration: 500, delay: i * 200, ease: easePolyOut }
        })}
        leave={(d, i) => ({
          opacity: [0],
          y: [100],
          timing: { duration: 500, delay: i * 200, ease: easePolyOut }
        })}
      >
        {nodes => (
          <div className="timeline-blocks-container">
            {nodes.map(({ key, data, state: { y, opacity } }) => (
              <div className="timeline-milestone">
                <div className="timeline-date_viewport" style={{ opacity }}>
                  2018 年 12 月
                </div>
                <div
                  key={key}
                  className="timeline-content_viewport"
                  style={{
                    opacity,
                    height: '300px',
                    //width: '300px',
                    transform: `translateY(${y}px)`,
                    border: '1px solid',
                    background: `${data.background}`
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </NodeGroup>
    ) : null;

  revealCards = () => (
    <div className="timeline-blocks-container">
      {this.state.cards.map(item => (
        <Fade key={item.id} bottom distance="20px">
          <div className="timeline-milestone">
            <div className="timeline-date_viewport">2018 年 12 月</div>
            <div
              className="timeline-content_viewport"
              style={{
                height: '300px',
                //width: '300px',

                border: '1px solid',
                background: `${item.background}`
              }}
            />
          </div>
        </Fade>
      ))}
    </div>
  );

  render() {
    return <div>{this.revealCards()}</div>;
  }
}

export default Featured;
