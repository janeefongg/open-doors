import React, { Component } from 'react';
import Button from '../common/Button';
import SearchBoxContainer from './SearchBoxContainer';

class SearchCompany extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('searching!');
  }

  render() {
    return (
      <div className="search-page">
        <div className="row">
          <div className="col-xs-12">
            Logo goes here
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            Search title goes here
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="search-container">
              <div className="row">
                <div className="col-xs-12">
                  <SearchBoxContainer />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 center-xs">
                  <Button customClass='lg-btn' text='Search' handleOnClick={this.handleOnClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchCompany;
