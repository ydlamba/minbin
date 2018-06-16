import './index.css';

import * as CryptoJS from 'crypto-js';
import * as React from 'react';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import { State } from '../../constants';

interface Props {
  input?: string;
  setInput: (val: any) => void;
}

class Main extends React.PureComponent<Props> {
  public handleChange(event) {
    this.props.setInput(event.target.value);
  }
  public render() {
    console.log(this.props.input);
    return (
      <main>
        <h3>Main</h3>
        <div className="input-panel">
          <input type="text" onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="output-panel">
        {CryptoJS.SHA256(this.props.input).toString()}
        </div>
      </main>
    );
  }
}

function mapStateToProps(state: State, ownProps) {
  return {
    input: state.input,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setInput: val => {
      dispatch(Actions.setInput(val));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
