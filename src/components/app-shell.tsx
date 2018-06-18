import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './app';

interface Props {
  logPageView: () => void;
}

export default class AppShell extends React.Component<Props> {
  public componentDidUpdate() {
    this.props.logPageView();
  }

  public render() {
    return (
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/md5" component={App} />
        <Route path="/sha256" component={App} />
        <Route path="/sha1" component={App} />
        <Route path="/ripemd160" component={App} />
      </Switch>
    );
  }
}
