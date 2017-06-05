// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HowToPage extends Component {
  render() {
    return (
      <div>
        <Link to="/">to Home</Link>
        <div>How to play</div>
      </div>
    );
  }
}
