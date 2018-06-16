import './index.css';

import * as CryptoJS from 'crypto-js';
import * as React from 'react';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import { State } from '../../constants';
import SideBar from './side-bar';

interface Props {
  input?: string;
  setInput: (val: any) => void;
}

class Main extends React.PureComponent<Props> {
  public handleChange(event) {
    if (event.target.value && event.target.value !== '') {
      this.props.setInput(event.target.value);
    }
  }
  public render() {
    console.log(this.props.input);
    return (
      <main>
        <SideBar/>
        <div className="tool">
          <div className="input-panel">
            <textarea onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="output-panel">
            {CryptoJS.SHA256(this.props.input).toString()}
          </div>
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
