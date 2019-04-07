import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./CustomizedInputBase.css";

class CustomizedInputBase extends Component {
  state = {
    inputValue: ""
  };

  handleChangeInput = e => {
    const value = e.currentTarget.value;
    this.setState({ inputValue: value });
  };

  addSong = () => {
    this.props.songSender(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  enterPressed(event) {
    const code = event.keyCode || event.which;
    if (code === 13) {
      this.addSong()
    }
  }

  render() {
    return (
      <Paper className="root" elevation={1} square="false">
        <InputBase
          className="input"
          placeholder="Search Spotify ..."
          value={this.state.inputValue}
          onChange={this.handleChangeInput}
          onKeyPress={this.enterPressed.bind(this)}
        />
        <IconButton className="iconButton" aria-label="Search">
          <SearchIcon onClick={this.addSong} />
        </IconButton>
      </Paper>
    );
  }
}

export default CustomizedInputBase;
