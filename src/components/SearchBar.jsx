import React, { Component } from "react";
import './../css/SearchBar.css';

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="input"
            placeholder="You can search here ..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
