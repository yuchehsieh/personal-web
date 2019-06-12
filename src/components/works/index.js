import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Featured from './featuted';

import { animateScroll } from 'react-scroll';

class Works extends Component {
  componentDidMount() {
    animateScroll.scrollTo(1, {
      duration: 0
    });

    console.log('called');
  }
  render() {
    return (
      <div className="work-page">
        <Link to="/works/ghowa">
          <Featured />
        </Link>

        <div
          style={{
            height: '200px'
          }}
        />
      </div>
    );
  }
}

export default Works;
