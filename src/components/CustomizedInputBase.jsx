import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
//import SearchIcon from '@material-ui/icons/Search';
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
    if (this.state.inputValue !== '') {
    this.props.songSender(this.state.inputValue);
    this.setState({ inputValue: '' })
    }
  };

  render() {
    return (
      <Paper className="root" elevation={1} square="false">
        <InputBase className="input"
          placeholder="Search Spotify ..."
          value={this.state.inputValue}
          onChange={this.handleChangeInput}
        />
        <IconButton className="iconButton" aria-label="Add" onClick={this.addSong}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </IconButton>
      </Paper>
    );
  }
}

export default CustomizedInputBase;