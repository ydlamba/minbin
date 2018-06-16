import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../constants';

interface Props {
}

class SideBar extends React.PureComponent<Props> {
  public render() {
    return (
      <nav>
        <h3 className="list-heading">Hash Calculator</h3>
        <ul>
          <li>MD5</li>
          <li>SHA-1</li>
          <li>SHA-256</li>
        </ul>
        <span>
          Version
        </span>
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
