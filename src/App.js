import React, { Component } from 'react';
// import logo from './logo.svg';
import SpotifyContainer from './SpotifyContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is Spotify!</h1>
        <SpotifyContainer />
      </div>
    );
  }
}

export default App;
