import React, { Component } from 'react';

class Test extends Component {
  componentDidMount() {
    console.log('Component Did Mount..');
  }
  componentWillMount() {
    console.log('Component Will Mount..');
  }

  componentWillUpdate() {
    console.log('Component Will Update..');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('Component Will Receive Props.. ');
  }

  render() {
    return (
      <div>
        <h1>Test Page</h1>
      </div>
    );
  }
}

export default Test;
