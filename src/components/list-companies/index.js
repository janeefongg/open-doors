import React, { Component } from 'react';
import SearchHeader from '../common/SearchHeader';
import SingleCompany from './SingleCompany';
import './list.scss';

class ListCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'Google',
    };
  }

  render() {
    return (
      <div className="company-list-container">
        <SearchHeader />
        <div className="non-fixed-content">
          <div className="search-query">
            <h3>Results for "{this.state.searchQuery}"</h3>
          </div>
          <div className="company-list row">
            <SingleCompany />
            <SingleCompany />
            <SingleCompany />
          </div>
        </div>
      </div>
    );
  }
}

export default ListCompanies;
