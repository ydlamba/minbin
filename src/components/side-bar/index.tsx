import './index.css';

import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../constants';

interface Props {
}

class SideBar extends React.PureComponent<Props> {
  public render() {
    return (
      <nav>
        <ul>
          <li>MD5</li>
          <li>SHA-1</li>
          <li>SHA-256</li>
        </ul>
      </nav>
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
)(SideBar);
