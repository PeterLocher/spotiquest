import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import logo from './logo.svg';
import "./css/App.css";
import InteractiveList from "./components/InteractiveList";
import CustomizedInputBase from "./components/CustomizedInputBase";
import Grid from "@material-ui/core/CssBaseline";
import MediaControlCard from "./components/MediaControlCard";

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
