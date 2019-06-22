import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../hoc/layout';
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
      <Layout>
        <div className="work-page">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages,
          </p>
          <p />
          <Featured />
        </div>
      </Layout>
    );
  }
}

export default Works;
