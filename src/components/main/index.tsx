import './index.css';

import * as CryptoJS from 'crypto-js';
import * as React from 'react';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { State } from '../../constants';
import SideBar from './side-bar';
import Clipboard from 'react-clipboard.js';
import { Copy } from 'react-feather';

interface Props {
  input?: string;
  tool?: string;
  history?: any;
  setInput: (val: any) => void;
  setTool: (val: any) => void;
}

interface IState {
  copied?: boolean;
}

declare const VERSION: string;

class Main extends React.PureComponent<Props, IState> {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }
  public handleChange(event) {
    if (event.target.value && event.target.value !== '') {
      this.props.setInput(event.target.value);
    }
  }
  public calculateOutput() {
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
  public componentDidUpdate() {
    if(this.state.copied) {
      setTimeout(() => {
        this.setState({copied: false});
      }, 3500);
    }
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
  public onCopy() {
    this.setState({copied: true}); 
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
            <span className="hash">{this.calculateOutput()}</span>
            <Clipboard className="copy-icon" data-clipboard-text={this.calculateOutput()} button-title="Copy" onSuccess={this.onCopy.bind(this)}>
              <Copy className="alert-icon" color="#fff" size={20}/>
            </Clipboard>
          </div>
          <span className="copied">{this.state.copied ? 'Copied!' : ''}</span>
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