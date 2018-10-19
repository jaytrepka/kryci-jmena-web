// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import capybara from './capybara.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container" data-tid="container">
          <h2>Code Names</h2>
          <Link to="/help">to Help</Link>
          <Link to="/guess">to Guess</Link>
          <Link to="/howto">How to play</Link>
          <img src={capybara} alt="capybara" width="100" height="100" style={{ padding: '10px' }} />
        </div>
        <style jsx>
          {
            `
            .container {
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .container h2 {
              font-size: 4rem;
            }

            .container a {
              font-size: 1.4rem;
              padding: 5px;
            }
            `
          }
        </style>
      </div>
    );
  }
}
