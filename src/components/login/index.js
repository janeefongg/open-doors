import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import InputForm from '../common/InputForm';
import Button from '../common/Button';
import './login.scss';
import logo from '../../assets/logo.svg';
import { connect } from 'react-redux';
import { saveUsername } from '../../actions/login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    // check if login store has all values
      // if so then redirect
      // else send an error to page
    console.log('submitting login!');
    // const { username, password } = this.props;
    if(this.props.username.length > 0 && this.props.password.length > 0) {
      // this.props.saveUsername({ username, password });
    }
  }

  saveUsername(username) {
    // call dispatch to save username to store
    console.log('saving! --- ', this.props);
    // console.log('saveusername --- ', saveUsername);
    console.log('')
    this.props.saveUsername({ username });
  }

  savePassword(payload) {
    // call dispatch to save username to store
    console.log('saving!');
    this.props.dispatch( {type: 'SAVE_PASSWORD', payload });
  }

  render() {
    return (
      <div className="login-container">
        <div className="row">
          <div className="col-xs-12">
            <div className="header">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="login-form">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="login-title">Login</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveUsername} placeholder='Enter a username' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.savePassword} placeholder='Password' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 button-container">
              <Button customClass='lg-btn' text='Sign In' handleOnClick={this.handleOnClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ saveUsername }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
