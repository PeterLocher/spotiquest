import React, { Component } from "react";
import './../css/SearchBar.css';

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            className="input"
            placeholder="You can search here ..."
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
