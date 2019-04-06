import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './CustomizedInputBase.css';

class CustomizedInputBase extends Component {
  state = {
    inputValue: ''
  };

  handleChangeInput = (e) => {
    const value = e.currentTarget.value;
    this.setState({ inputValue: value });
  };

  addSong = () => {
    this.props.songSender(this.state.inputValue);
    this.setState({ inputValue: '' })
  };

  render() {
    return (
      <Paper className="root" elevation={1} square="false">
        <InputBase className="input"
          placeholder="Search Spotify ..."
          value={this.state.inputValue}
          onChange={this.handleChangeInput}
        />
        <IconButton className="iconButton" aria-label="Search">
          <SearchIcon
            onClick={this.addSong}
          />
        </IconButton>
      </Paper>
    );
  }
}

export default CustomizedInputBase;