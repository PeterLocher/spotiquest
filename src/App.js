import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
// import logo from './logo.svg';
import SpotifyQueue from "./components/SpotifyQueue";
import SearchBar from "./components/SearchBar";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <div className="header">
            <h1>SpotifyQueuer</h1>
          </div>
          <div className="playing">
            <CurrentlyPlaying />
          </div>
          <div className="search">
            <SearchBar />
          </div>
          <div className="queue">
            <SpotifyQueue />
          </div>
          <div className="footer">Here is the footer!</div>
        </div>
        </React.Fragment>
    );
  }
}

export default App;
