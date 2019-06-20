import React, { Component } from 'react';

import Layout from '../../hoc/layout';

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
      <Layout>
        <div className="about-page">
          <Avatar />
          <MainContent />
        </div>
      </Layout>
    );
  }
}

export default About;
