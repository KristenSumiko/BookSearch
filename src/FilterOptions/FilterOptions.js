import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
  render() {
    return (
      <div className="FilterOptions">
        <label htmlFor="filterOption">Book Type: </label>
        <select id = "filterOption">
          <option value = "ebooks">No Filter</option>
          <option value = "free-ebooks">Free</option>
          <option value = "paid-ebooks">Paid</option>
        </select>
      </div>
    );
  }
}

export default FilterOptions;