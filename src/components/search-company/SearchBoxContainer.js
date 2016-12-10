import React, { Component } from 'react';
import SearchInputForm from '../common/SearchInputForm';
import './SearchCompany.scss';

class SearchBoxContainer extends Component {
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
            <SearchInputForm
              label='Company'
              customClass='search-company'
              handleInputChange={this.handleInputChange}
            />
            <SearchInputForm
              label='Where'
              customClass='search-location'
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBoxContainer;
