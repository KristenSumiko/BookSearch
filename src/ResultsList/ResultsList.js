import React, { Component } from 'react';
import './ResultsList.css';
import ListItem from '../ListItem/ListItem';

class ResultsList extends Component {
    render() {
        const bookList = this.props.items 
          ? this.props.items.map((book, key) => <ListItem {...props} key={key} />)
          : null; 
        return (
          <div id="results">
            <h2>Search Results</h2>
            <ul id="results-list">
              {props.items.map((book) =>
                <ListItem
                  key={book.id}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  price={book.saleInfo.retailPrice}
                  description={book.volumeInfo.description}
                />
              )}
            </ul>
        </div>
        );
    }
}
export default ResultsList;