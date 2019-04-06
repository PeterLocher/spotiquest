import React, { Component } from 'react';
// import logo from './logo.svg';
import SpotifyQueue from './components/SpotifyQueue';
import SearchBar from './components/SearchBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header"><h1>The is Spotify! Yeah!</h1></div>
        <div className="currentlyPlaying"><CurrentlyPlaying /></div>
        <div className="searchBar"><SearchBar /></div>
        <div className="queue"><SpotifyQueue /></div>
        <div className="footer">Here is the footer!</div>
      </div>
    );
  }
}

export default App;
