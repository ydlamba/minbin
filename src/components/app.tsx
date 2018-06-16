import './app.css';

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as EditorActions from '../actions';
import Header from './header';
import SideBar from './side-bar';
import Main from './main';

type Props = ReturnType<typeof mapDispatchToProps>;

class App extends React.Component<Props & { match: any; location: any }> {
  public render() {
    return (
      <div className="app-container">
        <Header />
        <Main />
        <SideBar />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
