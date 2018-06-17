import * as React from 'react';
import ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppShell from './components/app-shell';
import configureStore from './store/configure-store';

// Google analytics
ReactGA.initialize('');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const store = configureStore();

// Now that redux and react-router have been configured, we can render the
// React application to the DOM!
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppShell logPageView={logPageView} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
