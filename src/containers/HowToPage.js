// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HowToPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div>How to play</div>
          <Link to="/">to Home</Link>
        </div>
        <div className="main">This is just an empty screen - for now</div>
        <style jsx>
          {
            `
            .container {
              text-align: center;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .main {
              padding: 40px;
            }
            `
          }
        </style>
      </div>
    );
  }
}
