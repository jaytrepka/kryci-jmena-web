/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import {Switch, Route} from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import HelpPage from './containers/HelpPage';
import HowToPage from './containers/HowToPage';
import GuessPage from './containers/GuessPage';

export default () => (
  <App>
    <Switch>
      <Route path="/guess" component={GuessPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/howto" component={HowToPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
