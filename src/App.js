import React, { Component } from 'react';
// import logo from './logo.svg';
import SpotifyQueue from './SpotifyQueue';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header"><h1>The is Spotify! Yeah!</h1></div>
        <div className="searchBar">Here you can search!</div>
        <div className="queue"><SpotifyQueue /></div>
        <div className="footer">Here is the footer!</div>
      </div>
    );
  }
}

export default App;
