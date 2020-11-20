import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = props => {
  const [term, setTerm] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();
    props.onSearchSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="inline fields">
          <label htmlFor="search">Search: </label>
          <input
            onChange={e => setTerm(e.target.value)}
            type="text"
            id="search"
            placeholder="Start typing here to search for videos"
            value={term}
          />

          <button type="submit" className="ui submit button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
