import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email   : '',
      password: '',
    }
  }

  onHandleChange(field, e) {
    let newInput = {};
    newInput[field] = e.target.value;
    this.setState(newInput);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({type: 'POST_SIGNIN', payload: { email: this.state.email, password: this.state.password }});
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label>Email:</label>
          <input type="text" value={this.state.email} onChange={this.onHandleChange.bind(this, 'email')}/>
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input type="text" value={this.state.password} onChange={this.onHandleChange.bind(this, 'password')}/>
        </fieldset>
        <button action="submit">Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    email   : state.email,
    password: state.password,
  }

}

export default connect(mapStateToProps)(SignIn)
