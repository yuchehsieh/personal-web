import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { animateScroll } from 'react-scroll';

import Avatar from './avatar';
import MainContent from './content';

class About extends Component {
  componentDidMount() {
    animateScroll.scrollTo(1, {
      duration: 0
    });

    console.log('called');
  }
  render() {
    return (
      <div className="about-page">
        <Avatar />
        <MainContent />
      </div>
    );
  }
}

export default About;
