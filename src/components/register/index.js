import React, { Component } from 'react';
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
    console.log('registering!');
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
              <InputForm placeholder='Choose a Cool Username' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm placeholder='Password' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm placeholder='First Name' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm placeholder='Last Name' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm placeholder='E-mail' />
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

export default Register;
