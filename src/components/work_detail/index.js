import React, { Component } from 'react';

class WorkDetail extends Component {
  componentDidMount() {
    const workName = this.props.match.params.work_name;
    this.setState({ workName });
    console.log(workName);
  }

  render() {
    return <div>work detail</div>;
  }
}

export default WorkDetail;
