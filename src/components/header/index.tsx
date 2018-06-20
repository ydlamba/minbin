import './index.css';

import * as React from 'react';
import { AlertCircle } from 'react-feather';

export default class Header extends React.PureComponent {
  public render() {
    return (
      <header>
        <h1>
          <span className="min">min</span>
          <span className="bin">bin</span>
        </h1>
        <span>
          <a href="//github.com/ydlamba/minbin/issues" target="_blank">
            <h3>
              <span>Issues</span>
              <AlertCircle color="#fff" size={20} />
            </h3>
          </a>
        </span>
      </header>
    );
  }
}
