import React, { Component } from 'react';
import './SearchBar.css';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
    render() {
      return (
        <div className="SearchBar">
            <form id="js-form">
                <label htmlFor="searchTerm">Search Book(s): </label>
                <input type="text"id="searchTerm" required placeholder="Search term(s)" />
                <input type="submit" value="Submit" />
                <FilterOptions/>
            </form>
        </div>
      );
    }
  }

export default SearchBar;