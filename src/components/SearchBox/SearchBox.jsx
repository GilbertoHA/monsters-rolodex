import React from 'react';
import './SearchBox.css';

function SearchBox({ onFiltered, placeholder, searchInput }) {
  const onChangeHandler = (evt) => {
    onFiltered(evt);
  };

  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      value={searchInput}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
