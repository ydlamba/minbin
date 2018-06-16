import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../constants';

interface Props {
}

class SideBar extends React.PureComponent<Props> {
  public render() {
    return (
      <nav>
        <h2>SideBar</h2>
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
