import React, { Component } from 'react';

export default class SignIn extends Component {

  handleFormSubmit(input) {
    console.log(input);
    // need to do something to log user in
  }

  render() {

    return (
      <form>
        <fieldset>
          <label>Email:</label>
          <input type="text"  />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <input type="text" />
        </fieldset>
        <button action="submit">Sign In</button>
      </form>
    );
  }
}

//------------------------
// import React, { Component, PropTypes } from 'react';
// import { reduxForm } from 'redux-form';
//
// import { postCategory } from '../actions/index';
//
// class CategoryForm extends Component {
//   constructor(props) {
//     super(props);
//
//   }
//
//   postCategory(props) {
//     this.props.postCategory(props);
//     this.props.closeModal();
//
//   }
//
//   render() {
//     const { fields: { category }, handleSubmit } = this.props;
//     return (
//       <form onSubmit={handleSubmit(() => this.postCategory(this.props))}>
//         <h3>Create A New Category</h3>
//         <div>
//           <label>Category</label><br />
//           <input type="text" placeholder="Name of Category" {...this.props.fields.category} value={this.props.fields.category.value || ''} />
//         </div>
//         <input type="submit" />
//       </form>
//     );
//   }
// }
//
// export default reduxForm({
//   form: 'CategoryNewForm',
//   fields: ['category']
// }, null, { postCategory })(CategoryForm);
