import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      searchTerm: '',
      filterOption: null
    };
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${key}=${params[key]}`);
    return queryItems.join('&');
  }

  getBookList(query) {
    const apiKey = 'AIzaSyCNjsAkur270JWKVwmUguzGpMP0_sVt9HE';
    const searchURL = 'https://www.googleapis.com/books/v1/volumes';
    const params = {
        key: apiKey,
        q: $("#searchTerm").val(),
        filter: $('#filterOption').val(),
  };
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchBar />
        <ResultsList />
      </div>
    );
  }
}

export default App;