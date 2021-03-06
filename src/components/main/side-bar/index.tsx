import * as React from 'react';
import { Settings } from 'react-feather';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../../../actions';
import { State } from '../../../constants';

interface Props {
  tool?: string;
  history?: any;
  setTool: (val: any) => void;
}

class SideBar extends React.PureComponent<Props> {
  public handleChange(value) {
    this.props.setTool(value);
    if (this.props.history.location.pathname.replace(/\//g, '') !== value) {
      this.props.history.push(value);
    }
  }
  public render() {
    return (
      <nav>
        <ul>
          <h3>
            <span>Settings</span> <Settings color="#fff" size={20} />
          </h3>
          <div className="settings-panel">
            <section>
              <h3>Encryption</h3>
              <li className={this.props.tool === 'md5' ? 'active' : ''} onClick={this.handleChange.bind(this, 'md5')}>
                MD5
              </li>
              <li className={this.props.tool === 'sha1' ? 'active' : ''} onClick={this.handleChange.bind(this, 'sha1')}>
                SHA-1
              </li>
              <li
                className={this.props.tool === 'sha256' ? 'active' : ''}
                onClick={this.handleChange.bind(this, 'sha256')}
              >
                SHA-256
              </li>
              <li
                className={this.props.tool === 'ripemd160' ? 'active' : ''}
                onClick={this.handleChange.bind(this, 'ripemd160')}
              >
                RIPEMD-160
              </li>
            </section>
            <section>
              <h3>Decryption</h3>
              <li className="disabled">COMING SOON</li>
            </section>
            <section>
              <h3>Random Generation</h3>
              <li className="disabled">COMING SOON</li>
            </section>
          </div>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state: State, ownProps) {
  return {
    tool: state.tool,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setTool: val => {
      dispatch(Actions.setTool(val));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
);
