import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../actions';
import { State } from '../../../constants';

interface Props {
  setTool: (val: any) => void;
}

class SideBar extends React.PureComponent<Props> {
  public handleChange(value) {
    this.props.setTool(value);
  }
  public render() {
    return (
      <nav>
        <ul>
          <h3>Hash Calculator</h3>
          <li onClick={this.handleChange.bind(this, 'md5')}>MD5</li>
          <li onClick={this.handleChange.bind(this, 'sha1')}>SHA-1</li>
          <li onClick={this.handleChange.bind(this, 'sha256')}>SHA-256</li>
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
    setTool: val => {
      dispatch(Actions.setTool(val));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
