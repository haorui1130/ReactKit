import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Home from './components/Home';
import Home2 from './components/Home2';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home2} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
