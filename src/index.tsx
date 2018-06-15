import * as React from 'react';
import ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import configureStore from './store/configure-store';

// Google analytics
ReactGA.initialize('UA-44428446-7');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const store = configureStore();

// Now that redux and react-router have been configured, we can render the
// React application to the DOM!
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <AppShell logPageView={logPageView} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

/* tslint:disable */
console.log('%cWelcome to the Vega-Editor!', 'font-size: 16px; font-weight: bold;');
console.log(
  'You can access the Vega view with VEGA_DEBUG. Learn more at https://vega.github.io/vega/docs/api/debugging/.'
);
/* tslint:enable */
