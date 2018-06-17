import './index.css';

import * as CryptoJS from 'crypto-js';
import * as React from 'react';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import { State } from '../../constants';
import SideBar from './side-bar';

interface Props {
  input?: string;
  tool?: string;
  setInput: (val: any) => void;
}

class Main extends React.PureComponent<Props> {
  public handleChange(event) {
    if (event.target.value && event.target.value !== '') {
      this.props.setInput(event.target.value);
    }
  }
  public calculateHash() {
    const input = this.props.input;
    switch (this.props.tool) {
      case 'md5':
        return CryptoJS.MD5(input).toString();
      case 'sha1':
        return CryptoJS.SHA1(input).toString();
      case 'sha256':
        return CryptoJS.SHA256(input).toString();
      default:
        return;
    }
  }
  public componentDidMount() {
    (this.refs.input as any).focus();
  }
  public render() {
    console.log(this.props.input);
    return (
      <main>
        <div className="tool">
          <h3>Input Data</h3>
          <div className="input-panel">
            <textarea ref="input" onChange={this.handleChange.bind(this)}/>
          </div>
          <h3>Hash</h3>
          <div className="output-panel">
            {this.calculateHash()}
          </div>
        </div>
        <SideBar/>
      </main>
    );
  }
}

function mapStateToProps(state: State, ownProps) {
  return {
    input: state.input,
    tool: state.tool,
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
