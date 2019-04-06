import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
// import logo from './logo.svg';
import SpotifyQueue from "./components/SpotifyQueue";
import SearchBar from "./components/SearchBar";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import "./css/App.css";

import io from 'socket.io-client';
// const socket = io('192.168.43.86:8000');
const socket = io('localhost:8000');

class App extends Component {
  componentDidMount() {
    socket.on('connect', () => {
      console.log("Connected:", socket.connected);
    });

    socket.on('initial setup', (data) => {
      //this.setState({ dataGot: data })
    });

    socket.on('kage?', (data) => {
      console.log(data);
      //this.setState({ dataGot: [ ... this.state.dataGot, data]})
    });
  }

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
