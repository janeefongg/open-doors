// @flow
import React, { Component } from 'react';
import './App.scss';
import InputForm from '../common/InputForm';
import Button from '../common/Button';

class Splash extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Sign in to Open Doors
        </p>
        <div className="row">
          <div className="col-xs-offset-4 col-xs-4">
            <div className="login-form">
              <div className="row">
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-12">
                      <InputForm placeholder='Username' />
                    </div>
                    <div className="col-xs-12">
                      <InputForm placeholder='Password' />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 center-xs">
                      <Button customClass='lg-btn login-btn' text='Sign in'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
