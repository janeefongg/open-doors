// @flow
import React, { Component } from 'react';
import SearchInputForm from '../common/SearchInputForm';
import Button from '../common/Button';

class SearchBoxContainer extends Component {

  handleClick: () => void;

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return (
      <div>
        SearchBoxContainer
        <SearchInputForm />
        <SearchInputForm />
        <Button handleClick={this.handleClick} text={"Search"} />
      </div>
    );
  }
}

export default SearchBoxContainer;
