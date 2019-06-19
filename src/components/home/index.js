import React, { Component, Fragment } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <p>Hello There, I am Murphy</p>
        <div
          className="btn-get-start"
          onClick={() => this.props.history.push('/works')}
        >
          Let's Go
        </div>
      </div>
    );
  }
}

export default Home;
