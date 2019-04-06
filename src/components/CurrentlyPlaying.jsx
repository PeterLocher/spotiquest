import React, { Component } from "react";
import './../css/CurrentlyPlaying.css';

class CurrentlyPlaying extends Component {
  state = {};
  render() {
    return (
      <div className="playing">
        <img
          src="https://source.unsplash.com/user/erondu/150x150"
          alt="dummyPhoto"
        />
        <p className="songPlaying">The best song ever!</p>
        <p className="artist">Tenacious D</p>
      </div>
    );
  }
}

export default CurrentlyPlaying;
