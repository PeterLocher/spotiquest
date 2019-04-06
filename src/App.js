import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import logo from './logo.svg';
import SpotifyQueue from "./components/SpotifyQueue";
import SearchBar from "./components/SearchBar";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import "./css/App.css";
import InteractiveList from "./components/InteractiveList";
import CustomizedInputBase from "./components/CustomizedInputBase";
import Grid from "@material-ui/core/CssBaseline";
import AutoGrid from "./components/AutoGrid";
import MediaControlCard from "./components/MediaControlCard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid sm>
          <div className="App">
            <div className="playing">
              <MediaControlCard />
            </div>
            <div className="search">
              <CustomizedInputBase />
            </div>
            <div className="queue">
              <InteractiveList />
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
