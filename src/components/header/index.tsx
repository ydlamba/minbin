import './index.css'

import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../constants';
import { AlertCircle } from 'react-feather';

interface Props {
}

class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <header>
        <h1>
          <span className="min">min</span>
          <span className="bin">bin</span>
        </h1>
        <span>
          <a href="//github.com/ydlamba/minbin/issues" target="_blank"><AlertCircle className="alert" color="#fff" size={20}/></a>
        </span>
      </header>
    );
  }
}

function mapStateToProps(state: State, ownProps) {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
