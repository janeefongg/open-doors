import React, { Component } from 'react';
import InputForm from '../common/InputForm';
import Button from '../common/Button';
// import './App.scss';

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
  }

  saveUsername() {
    // call dispatch to save username to store
    console.log('saving!');
  }

  savePassword() {
    // call dispatch to save username to store
    console.log('saving!');
  }

  render() {
    return (
      <div className="Login-container">
        <div className="row">
          <div className="col-xs-12">
            <div className="header">
              Logo goes here
            </div>
          </div>
        </div>
        <div className="Login-form">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="Login-title">Login</h2>
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
            <div className="col-xs-12">
              <Button customClass='lg-btn' text='Sign In' handleOnClick={this.handleOnClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
