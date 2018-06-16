import './index.css'

import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../constants';
import { Github } from 'react-feather';

interface Props {
}

class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <header>
        <h1>minbin</h1>
        <span>
          <a href="https://github.com/ydlamba/minbin" target="_blank"><Github /></a>
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
