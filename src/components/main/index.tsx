import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../constants';

interface Props {
}

class Main extends React.PureComponent<Props> {
  public render() {
    return (
      <header>
        <h3>Main</h3>
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
)(Main);
