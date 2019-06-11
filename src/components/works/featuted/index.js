import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

class Featured extends Component {
  state = {
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
      }
    ]
  };

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

  render() {
    return <div>{this.showCards()}</div>;
  }
}

export default Featured;
