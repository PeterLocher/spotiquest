import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import logo from './logo.svg';
import "./css/App.css";
import InteractiveList from "./components/InteractiveList";
import CustomizedInputBase from "./components/CustomizedInputBase";
import Grid from "@material-ui/core/CssBaseline";
import MediaControlCard from "./components/MediaControlCard";

import io from 'socket.io-client';
const socket = io('10.192.157.54:8000');
//const socket = io('localhost:8000');

// const Queue = require("./PriorityQueue/priorityQueueClient.jsx");
// var songs = new Queue.constructor([]);
var songs = [];
var lock = false;

let append = (element) => {
  if (songs.filter(i => i.element === element).length > 0) {
    boostItem(element);
  } else {
    songs.push({ element: element, priority: 0 });
  }
};

let boostItem = (element) => {
  let index = songs.map(i => i.element).indexOf(element);
  songs[index].priority += 1;

  while (index > (lock ? 1 : 0) && songs[index].priority > songs[index - 1].priority) {
    let tmp = songs[index - 1];
    songs[index - 1] = songs[index];
    songs[index] = tmp;
    index--;
  }
};

let removeFirst = () => {
  if (songs.length > 0) {
    songs.shift();
  };
  lock = false;
};

var currentPlayData = { name: 'Raining Blood', artistName: 'Slayer', albumArt: 'https://i.scdn.co/image/18c6fef08f5729a6837551fae473d8f52b9eeb1e', songLenght: 28000 };
var songTime = 0;

class App extends Component {
  constructor(props) {
    super(props);
    //console.log("HVAD");
  }

  componentDidMount() {
    socket.on('connect', () => {
      console.log("Connected:", socket.connected);
      //console.log("heh", songs);
    });

    socket.on('initial setup', (data) => {
      console.log("Got stuff!", data);
      //this.setState({ songs: new Queue.constructor(data) })
      //songs = new Queue.constructor(data);
      songs = data.songs;
      currentPlayData = data.playData;
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

    socket.on('songUpvoted', (song) => {
      if (lock && songs.length > 0 && song === songs[0]) {
        return
      }

      boostItem(song);
      this.forceUpdate();
    });

    socket.on('newSongToPlay', (data) => {
      currentPlayData = data;
      songTime = 0;
      removeFirst();
      this.forceUpdate();
    });

    socket.on('songIsAt', (time) => {
      songTime = time;
      //console.log("GOT time!", time)
      this.forceUpdate();
    });

    socket.on('lockFirstSong', () => {
      lock = true
      this.forceUpdate();
    });
  }

  sendSong = (song) => {
    socket.emit('addSong', song);
  }

  upvoteSong = (song) => {
    socket.emit('upvoteSong', song);
  }

  render() {
    //console.log("kage", songs);
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid sm>
          <div className="App">
            <div className="playing">
              <MediaControlCard
                songData={currentPlayData}
                songAt={songTime}
              />
            </div>
            <div className="search">
              <CustomizedInputBase
                songSender={this.sendSong}
              />
            </div>
            <div className="queue">
              <InteractiveList
                songs={songs}
                upvote={this.upvoteSong}
                lock={lock}
              />
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
