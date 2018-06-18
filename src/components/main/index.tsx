import './index.css';

import * as CryptoJS from 'crypto-js';
import * as React from 'react';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { State } from '../../constants';
import SideBar from './side-bar';

interface Props {
  input?: string;
  tool?: string;
  history?: any;
  setInput: (val: any) => void;
  setTool: (val: any) => void;
}

declare const VERSION: string;

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
  public addEventListeners(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
  }
  public componentDidMount() {
    const textarea = this.refs.input as any;
    textarea.value = this.props.input;
    this.addEventListeners(textarea, 'propertychange change click keyup input paste', this.handleChange.bind(this));

    switch (this.props.history.location.pathname) {
      case '/':
        this.props.history.push(this.props.tool);
        break;
      case '/md5':
        this.props.setTool('md5');
        break;
      case '/sha1':
        this.props.setTool('sha1');
        break;
      case '/sha256':
        this.props.setTool('sha256');
        break;
      default:
        break;
    }
  }
  public render() {
    return (
      <main>
        <div className="tool">
          <h3>Input</h3>
          <div className="input-panel">
            <textarea placeholder="Remember, be nice!" ref="input" spellCheck={false} autoFocus/>
          </div>
          <h3>Hash</h3>
          <div className="output-panel">
            <span className="hash">{this.calculateHash()}</span>
          </div>
        </div>
        <SideBar/>
        <footer>
          <span className="version">v{VERSION}</span>
        </footer>
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
    setTool: val => {
      dispatch(Actions.setTool(val));
    },
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));