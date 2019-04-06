import React, { Component } from "react";
import "./../css/SpotifyQueue.css";

class SpotifyQueue extends Component {
  render() {
    return (
      <div>
        <ul className="queueList">
          <li>
            <div className="songGrid">
              <div className="songName">Raining Blood</div>
              <div className="songArtist">Slayer</div>
              <div className="vote">Upvoted by:7</div>
              <div className="queuedBy">Suggested by: Peter Locher</div>
            </div>
          </li>
          <li>Some band</li>
          <li>Some band</li>
          <li>Some band</li>
        </ul>
      </div>
    );
  }
}

export default SpotifyQueue;
