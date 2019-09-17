import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';
import Fade from 'react-reveal/Fade';

import Ghowa from './ghowa';

class Featured extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.state = {
      cards: [
        {
          id: 0,
          date: 'Dec 2018 - Present',
          pane: <Ghowa />,
          linkto: '/works/ghowa'
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
                    transform: `translateY(${y}px)`,
                    background: '#fff'
                  }}
                >
                  <Ghowa />
                </div>
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
          <Link to={item.linkto}>
            <div className="timeline-milestone">
              <div className="timeline-date_viewport">{item.date}</div>
              <div
                className="timeline-content_viewport"
                style={{
                  background: '#fff'
                }}
              >
                {item.pane}
              </div>
            </div>
          </Link>
        </Fade>
      ))}
    </div>
  );

  render() {
    return <div>{this.revealCards()}</div>;
  }
}

export default Featured;
