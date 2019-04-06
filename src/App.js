import React, { Component } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      artistQ: "",
      trackQ: "",
      albumUri: "spotify:album:5v5BfkxWDAKTkzrXl3H0mU",
      trackNo: 9,
      currentTrackLength: 280000,
      nextTrackLength: 280000
    }
  }

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
          if (response.item != null && response.item.name != null) {
              this.setState({
                  nowPlaying: {
                      name: response.item.name,
                      albumArt: response.item.album.images[0].url
                  }
              });
          }
        })
  }

  static playRainingBlood(){
    spotifyApi.play({
        device_id: "2a68b1cb66d56c81b1b685d16f0f2d7c094f8c9c",
        context_uri: "spotify:album:5v5BfkxWDAKTkzrXl3H0mU",
        offset: {
            position: 9
        },
        position_ms: 32000});
  }

  playNextTrack(){
    var albumUri = this.state.albumUri;
    var trackNo = this.state.trackNo;
    spotifyApi.play({
      device_id: "2a68b1cb66d56c81b1b685d16f0f2d7c094f8c9c",
      context_uri: albumUri,
      offset: {
        position: trackNo
      },
      position_ms: 0});
    this.interval = setInterval(() => this.checkPlayNextTrack(), 400);
    this.setState({currentTrackLength: this.state.nextTrackLength})
  }

  checkPlayNextTrack(){
      spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
          var timeLeft = this.state.currentTrackLength - response.progress_ms;
          console.log(timeLeft);
          if(timeLeft < 501 && !(timeLeft <= 0)) {
            console.log("nextSong");
            clearInterval(this.interval);
            this.setState({triggerNextTrack: false});
            this.playNextTrack();
          }
        });
  }

  searchTrack(q){
      spotifyApi.searchTracks(q, {
          limit: 1
      }).then((response) => {
          var item = response.tracks.items[0];
          if (item == null) {this.letNextSongBeSlayer();}
          else {
              this.setState({
                  albumUri: item.album.uri,
                  trackNo: item.track_number - 1,
                  nextTrackLength: item.duration_ms
              })
          }
      })
  }

  letNextSongBeSlayer() {
      spotifyApi.getAlbumTracks("2kwj7NbZ9YMGYYvCNrknoj").then((response) => {
          var no = Math.floor(Math.random()*12);
          var item = response.items[no];
          this.setState({
              albumUri: "spotify:album:2kwj7NbZ9YMGYYvCNrknoj",
              trackNo: no,
              nextTrackLength: item.duration_ms
          })
      });
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    this.getNowPlaying();

    return (
      <div className='App'>
        <a href='http://localhost:8888'>
            Login to Spotify
        </a>

          <div>
              Now Playing: {this.state.nowPlaying.name}
          </div>

          <div>
              <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
          </div>

          <div>
              <text>
                  Sang_______
              </text>
              <input type="text"
                     onChange={(e) => {
                         if(e.target.value !== undefined) this.setState({trackQ: e.target.value})
                     }}
                     value={this.state.trackQ}>
              </input>
          </div>

          <div>
              <text>
                  Kunstner___
              </text>
              <input type="text"
                     onChange={(e) => {
                         if(e.target.value !== undefined) this.setState({artistQ: e.target.value})
                     }}
                     value={this.state.artistQ}>
              </input>
          </div>

          <div>
              {this.state.loggedIn &&
              <button onClick={() => {
                  this.searchTrack(this.state.artistQ + " " + this.state.trackQ)
              }}>
                  Get track
              </button>}

              { this.state.loggedIn &&
              <button onClick={() => this.playNextTrack()}>
                  Play next track
              </button>}
          </div>
      </div>
    )
  }
}

export default App;
