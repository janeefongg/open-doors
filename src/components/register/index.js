import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from '../common/InputForm';
import Button from '../common/Button';
import './register.scss';
import logo from '../../assets/logo.svg';

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { isRegisterValid } = this.props;
    if(isRegisterValid) {
      // dispatch redirect to search page
    } else {
      // render error message
    }
  }

  saveUsername() {
    // call dispatch to save username to store
    console.log('saving!');
  }

  savePassword() {
    // call dispatch to save username to store
    console.log('saving!');
  }

  saveFirstName() {
    // call dispatch to save username to store
    console.log('saving!');
  }

  saveLastName() {
    // call dispatch to save username to store
    console.log('saving!');
  }

  saveEmail() {
    // call dispatch to save username to store
    console.log('saving!');
  }

  render() {
    return (
      <div className="register-container">
        <div className="row">
          <div className="col-xs-12">
            <div className="header">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="register-form">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="register-title">Quick Registration</h2>
              <h4 className="register-subtitle">It only takes a few seconds</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveUsername} placeholder='Choose a Cool Username' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.savePassword} type='password' placeholder='Password' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveFirstName} placeholder='First Name' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveLastName} placeholder='Last Name' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveEmail} placeholder='E-mail' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 button-container">
              <Button customClass='lg-btn' text='Sign Up' handleOnClick={this.handleOnClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isRegisterValid: state.register.isValid,
});
export default connect(mapStateToProps)(Register);
