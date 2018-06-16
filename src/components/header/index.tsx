import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../constants';

interface Props {
}

class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <header>
        <h1>Header</h1>
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
