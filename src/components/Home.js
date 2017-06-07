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
          <img src={capybara} alt="capybara" />
          <Link to="/help">to Help</Link>
          <Link to="/guess">to Guess</Link>
          <Link to="/howto">How to play</Link>
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
              font-size: 5rem;
            }

            .container a {
              font-size: 1.4rem;
            }
            `
          }
        </style>
      </div>
    );
  }
}
