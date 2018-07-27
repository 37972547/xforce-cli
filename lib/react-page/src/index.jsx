import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Pages from './pages/index';
import configureStore from './store/configureStore';

import './assets/scss/index.scss'; ;

let store = configureStore();

render(
  <Provider store={store}>
    <HashRouter>
      <React.Fragment>
        <Pages />
      </React.Fragment>
    </HashRouter>
  </Provider>,
  document.querySelector('#app')
);
