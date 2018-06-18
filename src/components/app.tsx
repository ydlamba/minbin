import './app.css';

import * as React from 'react';
import { connect } from 'react-redux';
import * as EditorActions from '../actions';
import Header from './header';
import Main from './main';

export default class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Header />
        <Main />
      </div>
    );
  }
}
