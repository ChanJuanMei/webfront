import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'dva/router';
import App from '../components/App';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

function Routes({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );
}
Routes.propTypes = {
  history: PropTypes.any // eslint-disable-line
};
export default Routes;
