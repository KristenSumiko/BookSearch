import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  props = {
    key= {/*book.id*/},
    title={/*book.volumeInfo.title*/},
    author={/*book.volumeInfo.authors*/},
    price={/*book.saleInfo.retailPrice*/},
    description={/*book.volumeInfo.description*/}
  }

  render() {
    return (
      <li>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{price}</p>
        <p>{description}</p>
      </li>
    );
  }
}

export default ListItem;