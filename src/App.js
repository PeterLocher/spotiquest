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

// const Queue = require("./PriorityQueue/priorityQueueClient.jsx");
// var songs = new Queue.constructor([]);
var songs = [];

let append = (element) => {
  if (songs.filter(i => i.element === element).length > 0) {
      boostItem(element);
  } else{
      songs.push({element: element, priority: 0});
  }
};

let boostItem = (element) => {
  let index = songs.map(i => i.element).indexOf(element);
  songs[index].priority += 1;

  while (index !== 0 && songs[index].priority > songs[index - 1].priority) {
      let tmp = songs[index - 1];
      songs[index - 1] = songs[index];
      songs[index] = tmp;
      index--;
  }
};

var currentPlayData = {name: 'Raining Blood', albumArt: 'spotify:album:5v5BfkxWDAKTkzrXl3H0mU', songLenght: 28000};

class App extends Component {
  constructor(props) {
    super(props);
    console.log("HVAD");
  }

  componentDidMount() {
    socket.on('connect', () => {
      console.log("Connected:", socket.connected);
      //console.log("heh", songs);
    });

    socket.on('initial setup', (data) => {
      //console.log("Got stuff!", data);
      //this.setState({ songs: new Queue.constructor(data) })
      //songs = new Queue.constructor(data);
      songs = data;
      //console.log("I now am!", songs)
      this.forceUpdate();
    });

    socket.on('songAdded', (song) => {
      //console.log(song);
      //console.log(songs);
      //songs.append(song);
      append(song);
      this.forceUpdate();
    });

    socket.on('newSongToPlay', (data) => {
        currentPlayData = data;
        this.forceUpdate();
    });
  }

  sendSong = (song) => {
    socket.emit('addSong', song);
  }

  render() {
    console.log("kage", songs);
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid sm>
          <div className="App">
            <div className="playing">
              <MediaControlCard
                songData = {currentPlayData}
              />
            </div>
            <div className="search">
              <CustomizedInputBase
                songSender = {this.sendSong}
              />
            </div>
            <div className="queue">
              <InteractiveList
                songs = {songs}
              />
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
