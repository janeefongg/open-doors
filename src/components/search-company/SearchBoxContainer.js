// @flow
import React, { Component } from 'react';
import SearchInputForm from '../common/SearchInputForm';
import Button from '../common/Button';

class SearchBoxContainer extends Component {
  state: { numOfValidInputFields: number }

  handleOnClick: () => void;
  handleInputChange: () => void;

  constructor() {
    super()
    this.state = {
      numOfValidInputFields: 0,
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleOnClick() {
    if(this.state.numOfValidInputFields) {
      console.log('Search for a company!');
    } else {
      console.error('Fields left blank...');
    }
  }

  handleInputChange(defaultInput: string, currentInput: string, hasNotChangedBefore: boolean) {
    if(currentInput !== defaultInput && hasNotChangedBefore) {
      this.setState({ numOfValidInputFields: ++this.state.numOfValidInputFields });
    } else if (currentInput === defaultInput) {
      this.setState({ numOfValidInputFields: --this.state.numOfValidInputFields });
    }
  }

  render() {
    return (
      <div className='search-box-container'>
        <div className='row center-xs'>
          <div className='col-xs-12'>
            <h5>Search for a company</h5>
          </div>
        </div>
        <div className='row middle-xs center-xs'>
          <div className='col-xs-5'>
            <SearchInputForm label='What company' handleInputChange={this.handleInputChange} />
          </div>
          <div className='col-xs-5'>
            <SearchInputForm label='Where (city, state, or zip)' handleInputChange={this.handleInputChange} />
          </div>
          <div className='col-xs-2'>
            <Button handleOnClick={this.handleOnClick} text='Search' />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBoxContainer;
