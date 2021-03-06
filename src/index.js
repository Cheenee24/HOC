import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, BrowserHistory } from 'react-router';

import requireAuth from './components/require_auth';
import App from './components/app';
import reducers from './reducers';
import resources from './components/resources';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={BrowserHistory} >
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(resources)}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
